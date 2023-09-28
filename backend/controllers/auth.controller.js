import UserModel from '../models/user.schema.js'
import { hash, compare } from 'bcrypt';
import { SALT } from '../constants/salt.js';
import { createAccessToken } from '../middlewares/jwt.middleware.js';
import jwt from 'jsonwebtoken';

export const userRegister = async (req, res) => {
  try {
    const { cedula, name, lastName, address, 
            phone, email, password } = req.body;

    const existingUserByEmail = await UserModel.findOne({ email });
    if (existingUserByEmail) 
      return res
        .status(409)
        .send({ message: ['Ya existe un usuario con ese email registrado'] });

    const hashedPassword = await hash(password, SALT);
    const user = new UserModel({
      cedula,
      name,
      lastName,
      address,
      phone,
      email,
      password: hashedPassword
    });
    await user.save();

    return res.status(201).send({ message: ['Usuario registrado con éxito'] });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUserByEmail = await UserModel.findOne({ email });
    if (!existingUserByEmail)
      return res.status(400).send({ message: ['Credenciales incorrectas'] });

    const checkPassword = await compare(password, existingUserByEmail.password);
    if(!checkPassword)
      return res.status(400).send({ message: ['Credenciales incorrectas'] });

    const token = await createAccessToken({ id: existingUserByEmail._id }); 
    res.cookie('token', token);
  
    return res.status(200).send({ message: ['Inicio de sesión exitoso'] });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const userLogout = (req, res) => {
  res.cookie('token', '', { // Vacia el token
    expires: new Date(0)
  });

  return res.status(200).send({ message: ['Cierre de sesión exitoso'] });
};

export const userVerifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) 
    return res.status(401).send({ message: ['Usuario no autorizado'] });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (err, user) => {
    if (err)
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    const { _id, cedula, name, lastName, address, phone, email } = existingUserById;

    return res.send({ _id, cedula, name, lastName, address, phone, email });
  });
};