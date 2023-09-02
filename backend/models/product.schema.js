import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  brand: { type: String, minLength: 2, maxLength: 20 },
  name: { type: String, require: true, minLength: 2, maxLength: 50 },
  description: { type: String, minLength: 2, maxLength: 50 },
  price: { type: Number, default: 0 },
  images: [{ type: String }],
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: { type: Object }
});

const ProductModel = model('Product', productSchema);

export default ProductModel;