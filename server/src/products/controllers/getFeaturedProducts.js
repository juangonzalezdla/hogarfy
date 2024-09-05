import productModel from "../model/product.schema.js";

const getFeaturedProducts = async (req, res) => {
  try {
    const products = await productModel.find({ isFeatured: true }).limit(12).populate('category');
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default getFeaturedProducts;