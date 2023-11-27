import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  brand: { type: String, require: true, minLength: 2, maxLength: 20 },
  name: { type: String, require: true, minLength: 2, maxLength: 30 },
  description: { type: String, minLength: 2, maxLength: 200 },
  price: { type: Number, require: true, default: 0 },
  images: [{ type: String }],
  properties: { type: Object },
  category: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Category' 
  }
});

const ProductModel = model('Product', productSchema);

export default ProductModel;