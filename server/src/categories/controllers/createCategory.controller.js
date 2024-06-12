import categoryModel from '../model/category.schema.js';

const createCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    const category = new categoryModel({
      name: name,
      parent: parentId,
    });

    if (parentId) {
      const parentCategory = await Category.findById(parentId);
      parentCategory.children.push(category._id);
      await parentCategory.save();
    }

    await category.save();

    return res.status(201).json({ ok: true, message: 'Categoria creada' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default createCategory;