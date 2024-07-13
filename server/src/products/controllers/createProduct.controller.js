import productModel from '../model/product.schema.js';

const createProduct = async (req, res) => {
  try {
    const { brand, name, description, price, images, properties, category, isFeatured } = req.body;

    const product = new productModel({
      brand,
      name,
      description,
      price,
      images,
      properties,
      category,
      isFeatured
    });
    await product.save();

    return res.status(200).json({ ok: true, message: 'Producto creado con éxito' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
};

export default createProduct;