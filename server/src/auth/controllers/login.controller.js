import userModel from '../../users/model/user.schema.js';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUserByEmail = await userModel.findOne({ email });
    if (!existingUserByEmail)
      return res.status(401).send({ ok: false, message: 'Credenciales incorrectas' });

    const checkPassword = await compare(password, existingUserByEmail.password);
    if (!checkPassword)
      return res.status(401).send({ ok: false, message: 'Credenciales incorrectas' });

    const token = jwt.sign(
      { id: existingUserByEmail._id, isAdmin: existingUserByEmail.isAdmin },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: '2d' }
    );
    res.cookie('token', token, { httpOnly: true });

    return res.status(200).json({ ok: true, message: 'Inicio de sesión exitoso' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

export default login;