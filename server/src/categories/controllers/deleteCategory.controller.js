import categoryModel from '../model/category.schema.js';

const deleteCategory = async (req, res) => {
  try {
    const categoryById = await categoryModel.findById(req.params.id);
    if (!categoryById)
      return res.status(404).json({ ok: false, message: 'Categoria no encontrada' });

    await categoryById.deleteOne();

    return res.status(204).json({ ok: true, message: 'Categoria eliminada'});
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default deleteCategory;