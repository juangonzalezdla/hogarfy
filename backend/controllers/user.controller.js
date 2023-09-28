import UserModel from '../models/user.schema.js'
import { hash, compare } from 'bcrypt';
import { SALT } from '../constants/salt.js';

export const userProfile = async (req, res) => {
  try {
    const { user } = req;

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const { _id, cedula, name, lastName, address, phone, email } = existingUserById;

    return res.send({ _id, cedula, name, lastName, address, phone, email }); 
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
};

export const userUpdateData = async (req, res) => {
  try {
    const { user } = req;
    const { name, lastName, address, phone } = req.body;

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    existingUserById.name = name;
    existingUserById.lastName = lastName;
    existingUserById.address = address;
    existingUserById.phone = phone;
    await existingUserById.save();

    return res.status(200).send({ message: ['Usuario actualizado'] });
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
};

export const userUpdateEmail = async (req, res) => {
  try {
    const { user } = req;
    const { email, password } = req.body;

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const checkPassord = await compare(password, existingUserById.password);
    if (!checkPassord)
      return res.status(401).send({ message: ['Credenciales incorrectas'] }); 

    existingUserById.email = email;
    await existingUserById.save();

    return res.status(200).send({ message: ['Email del usuario actualizado'] });
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
};

export const userUpdatePassword = async (req, res) => {
  try {
    const { user } = req;
    const { oldPassword, newPassword } = req.body;

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const checkPassord = await compare(oldPassword, existingUserById.password);
    if (!checkPassord)
      return res.status(401).send({ message: ['Credenciales incorrectas'] });
    
    const hashedPassword = await hash(newPassword, SALT);
    existingUserById.password = hashedPassword;
    await existingUserById.save();

    return res.status(200).send({ message: ['Contraseña del usuario actualizada'] });
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
};

export const userUnregister = async (req, res) => {
  try {
    const { user } = req;
    const { password  } = req.body;

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const checkPassord = compare(password, existingUserById.password);
    if (!checkPassord)
      return res.status(401).send({ message: ['Credenciales incorrectas'] }); 

    await existingUserById.deleteOne();

    return res.status(200).send({ message: ['Usuario eliminado'] });
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
};