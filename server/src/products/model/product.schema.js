import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const productSchema = new Schema({
  _id: { type: String, default: uuidv4 },
  brand: { type: String },
  name: { type: String, require: true },
  description: { type: String },
  price: { type: Number, require: true },
  images: [{ type: String }],
  properties: { type: Object },
  category: { type: String, ref: 'Category' },
  isFeatured: { type: Boolean, default: false }
}, {
  timestamps: true
});

const productModel = model('Product', productSchema);

export default productModel;