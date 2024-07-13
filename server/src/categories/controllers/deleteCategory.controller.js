import categoryModel from '../model/category.schema.js';

const deleteCategory = async (req, res) => {
  try {
    const categoryById = await categoryModel.findById(req.params.id);
    if (!categoryById)
      return res.status(404).json({ ok: false, message: 'Categoria no encontrada' });

    if (categoryById.parent) {
      const parentCategory = await categoryModel.findById(categoryById.parent);
      if (parentCategory) {
        parentCategory.children.pull(categoryById._id);
        await parentCategory.save();
      }
    }

    await categoryById.deleteOne();

    return res.status(204).json({ ok: true, message: 'Categoria eliminada'});
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default deleteCategory;