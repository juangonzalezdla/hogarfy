import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, require: true },
  properties: [{ type: Object }],
  parent: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Category' 
  }
});

const CategoryModel = model('Category', categorySchema);

export default CategoryModel;