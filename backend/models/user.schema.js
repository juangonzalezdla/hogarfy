import { Schema, model} from "mongoose";

const userSchema = new Schema({
  cedula: { type: Number, maxLength: 10 },
  name: { type: String, require: true, minLength: 2, maxLength: 20 },
  lastName: { type: String, require: true, minLength: 4, maxLength: 50 },
  address: { type: String, require: true },
  phone: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
});

const UserModel = model('User', userSchema);

export default UserModel;