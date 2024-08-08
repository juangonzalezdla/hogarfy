import userModel from '../../users/model/user.schema.js';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await userModel.findOne({ email });
    if (!userByEmail)
      return res.status(401).json({ ok: false, message: 'Credenciales incorrectas' });

    const checkPassword = await compare(password, userByEmail.password);
    if (!checkPassword)
      return res.status(401).json({ ok: false, message: 'Credenciales incorrectas' });

    const token = jwt.sign(
      { id: userByEmail._id, isAdmin: userByEmail.isAdmin },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: '2d' }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'None',
    });

    return res.status(200).json({ ok: true, message: 'Inicio de sesión exitoso', user: { _id: userByEmail._id, names: userByEmail.names, isAdmin: userByEmail.isAdmin } });
  } catch (error) {
    return res.status(500).send({ ok: false, message: error.message });
  }
}

export default logIn;