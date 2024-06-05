import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: { type: String, _id: false },
  names: { type: string, require: true, minLength: 4, maxLength: 30 },
  lastNames: { type: string, require: true, minLength: 4, maxLength: 30 },
  citizenshipCard: { type: string, require: true, minLength: 6, maxLength: 10 },
  phoneNumber: { type: string, require: true, maxLength: 10 },
  cityAndDepartment: { type: string, require: true, minLength: 4, maxLength: 30 },
  address: { type: string, require: true, minLength: 4, maxLength: 30 },
  email: { type: string, require: true, unique: true },
  password: { type: string, require: true },
  isAdmin: { type: Boolean, default: false }
})

export const userModel = model('User', userSchema);