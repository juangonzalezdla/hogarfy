import { Schema, model } from "mongoose";

const userSchema = new Schema({
  cedula: { type: String, require: true },
  name: { type: String, require: true, minLength: 2, maxLength: 20, unique: true },
  lastName: { type: String, require: true, minLength: 4, maxLength: 50 },
  address: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  roles: {
    client: { type: Boolean, default: true },
    admin: { type: Boolean, default: false }
  }
});

const UserModel = model('User', userSchema);

export default UserModel;