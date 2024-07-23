import productModel from '../model/product.schema.js';

const deleteProduct = async (req, res) => {
  try {
    const productById = await productModel.findById(req.params.id);
    if (!productById)
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });

    await productById.deleteOne();

    return res.status(200).json({ ok: true, message: 'Producto eliminado' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default deleteProduct;