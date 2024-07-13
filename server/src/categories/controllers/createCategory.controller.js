import categoryModel from '../model/category.schema.js';

const createCategory = async (req, res) => {
  try {
    const { name, properties, parentId } = req.body;

    const category = new categoryModel({
      name: name,
      properties: properties,
      parent: parentId,
    });

    if (parentId) {
      const parentCategory = await categoryModel.findById(parentId);
      parentCategory.children.push(category._id);
      await parentCategory.save();
    }

    await category.save();

    return res.status(201).json({ ok: true, message: 'Categoria creada' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default createCategory;