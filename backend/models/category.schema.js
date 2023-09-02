import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, require: true },
  parent: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: [{ type: Object }]
});

const CategoryModel = model('Category', categorySchema);

export default CategoryModel;