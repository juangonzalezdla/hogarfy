import categoryModel from '../model/category.schema.js';

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find().populate('parent').populate('children');

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default getCategories;