import productModel from '../model/product.schema.js';

const getProduct = async (req, res) => {
  try {
    const productById = await productModel.findById(req.params.id).populate('category');
    if (!productById)
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    
    return res.status(200).json(productById);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default getProduct;