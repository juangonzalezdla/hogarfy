import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: { type: String, _id: false },
  names: { type: String, require: true, minLength: 3, maxLength: 30 },
  lastNames: { type: String, require: true, minLength: 4, maxLength: 30 },
  citizenshipCard: { type: String, require: true, minLength: 6, maxLength: 10 },
  phoneNumber: { type: String, require: true, maxLength: 10 },
  cityAndDepartment: { type: String, require: true, minLength: 4, maxLength: 50 },
  address: { type: String, require: true, minLength: 4, maxLength: 50 },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minLength: 10, maxLength: 25 },
  isAdmin: { type: Boolean, default: false }
})

const userModel = model('User', userSchema);

export default userModel;