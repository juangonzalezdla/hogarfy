import productModel from "../model/product.schema.js";

const getRecentProducts = async (req, res) => {
  try {
    const products = await productModel.find().sort({ createdAt: -1 }).limit(12).populate('category');
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default getRecentProducts;
