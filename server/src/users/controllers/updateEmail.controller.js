import userModel from '../model/user.schema.js';
import { compare } from 'bcrypt';

const updateEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });

    const checkPassord = compare(password, userById.password);
    if (!checkPassord)
      return res.status(401).json({ ok: false, message: 'Contraseña incorrecta' });
    
    userById.email = email;
    await userById.save();

    return res.status(201).json({ ok: true, message: 'Email actualizado' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default updateEmail;