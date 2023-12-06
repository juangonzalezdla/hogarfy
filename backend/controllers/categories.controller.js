import CategoryModel from '../models/category.schema.js';

export const createCategory = async (req, res) => {
  try {
    const { name, properties, parent } = req.body;

    const category = new CategoryModel({
      name,
      properties,
      parent
    })
    await category.save();

    return res.status(200).json('Categoria creada con éxito');
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate('parent');
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id).populate('parent');;
    if (!category) return res.status(404).json('Categoria no encontrada');

    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const updateCategory = async (req, res) => {
  try {
    const { name, properties, parent } = req.body;

    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(404).json('Categoria no encontrada');

    category.name = name;
    category.properties = properties;
    category.parent = parent;
    await category.save();

    return res.status(201).json('Categoria actualizada');
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(404).json('Categoria no encontrada');

    await category.deleteOne();

    return res.status(204).json('Categoria eliminada');
  } catch (error) {
    return res.status(500).json(error);
  }
}