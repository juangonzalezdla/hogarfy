import categoryModel from '../model/category.schema.js';

const getCategory = async (req, res) => {
  try {
    const categoryById = await categoryModel.findById(req.params.id).populate('children');
    if (!categoryById)
      return res.status(404).json({ ok: false, message: 'Categoria no encontrada' });

    return res.status(200).json(categoryById);
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default getCategory;