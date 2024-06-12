import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const categorySchema = new Schema({
  _id: { type: String, uuidv4 },
  name: { type: String, required: true },
  parent: { type: String, ref: 'Category', default: null },
  children: [{ type: String, ref: 'Category' }]
});

const categoryModel = model('Category', categorySchema);

export default categoryModel;