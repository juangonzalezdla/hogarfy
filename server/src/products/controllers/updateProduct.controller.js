import productModel from '../model/product.schema.js';

const updateProduct = async (req, res) => {
  try {
    const { brand, name, description, price, images, properties, category, isFeatured } = req.body;

    const productById = await productModel.findById(req.params.id);
    if (!productById)
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    
    productById.brand = brand;
    productById.name = name;
    productById.description = description;
    productById.price = price;
    productById.images = images;
    productById.properties = properties;
    productById.category = category;
    productById.isFeatured = isFeatured;
    await productById.save();

    return res.status(201).json({ ok: true, message: 'Producto actualizado' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default updateProduct;