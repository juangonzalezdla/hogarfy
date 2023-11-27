import ProductModel from '../models/product.schema.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export const createProduct = async (req, res) => {
  try {
    const { brand, name, description, price, images, properties, category } = req.body;
    const originalImageNames = req.files.map(file => uuidv4() + path.extname(file.originalname).toLocaleLowerCase());

    const product = new ProductModel({
      brand,
      name,
      description,
      price,
      images: originalImageNames,
      properties,
      category
    });
    await product.save();

    return res.status(201).json('Producto creado con éxito');
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find().populate('category');
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id).populate('category');
    if (!product) return res.status(401).json('Producto no encontrado');

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateProductById = async (req, res) => {
  try {
    const { brand, name, description, price, images, properties, category } = req.body;
    const originalImageNames = req.files.map(file => file.originalname);

    const updatedProduct = await ProductModel.findById(req.params.id);
    if(!updatedProduct) return res.status(401).json('Producto no encontrado');

    updatedProduct.brand = brand;
    updatedProduct.name = name;
    updatedProduct.description = description;
    updatedProduct.price = price;
    updatedProduct.images = originalImageNames;
    updatedProduct.properties = properties;
    updatedProduct.category = category;
    await updatedProduct.save();

    return res.status(201).json('Producto actualizado correctamente');
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(401).json('Producto no encontrado');

    await product.deleteOne();

    return res.status(201).json('Producto eliminado correctamente');
  } catch (error) {
    return res.status(500).json(error);
  }
};