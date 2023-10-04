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

    return res.status(201).json('Categoria creada con éxito');
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(201).json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(401).json('Categoria no encontrada');

    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const updateCategory = async (req, res) => {
  try {
    const { name, properties, parent } = req.body;

    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(401).json('Categoria no encontrada');

    category.name = name;
    category.properties = properties;
    category.parent = parent;
    await category.save();

    return res.status(201).json('Categoria actualizada correctamente');
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(401).json('Categoria no encontrada');

    await category.deleteOne();

    return res.status(201).json('Categoria eliminada correctamente');
  } catch (error) {
    return res.status(500).json(error);
  }
}