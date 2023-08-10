import UserModel from '../models/user.schema.js'
import { hash, compare } from 'bcrypt';
import { SALT } from '../constants/salt.js';
import createAccessToken from '../middlewares/jwt.middleware.js';

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

    return res.status(201).send('Usuario registrado con éxito');
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
  
    return res.status(200).send('Inicio de sesión exitoso');
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const userLogout = (req, res) => {
  res.cookie('token', '', { // Vacia el token
    expires: new Date(0)
  });

  return res.status(200).send('Cierre de sesión exitoso');
};