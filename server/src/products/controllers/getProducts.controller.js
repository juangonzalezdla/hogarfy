import productModel from '../model/product.schema.js';

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate('category');
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default getProducts;