import userModel from '../model/user.schema.js';
import { compare, hash } from 'bcrypt';
import { SALT } from '../../auth/helpers/salt.js';

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });

    const checkPassord = compare(oldPassword, userById.password);
    if (!checkPassord)
      return res.status(401).json({ ok: false, message: 'Contraseña incorrecta' });
    
    const hashedPassword = await hash(newPassword, SALT);
    userById.password = hashedPassword;
    await userById.save();

    return res.status(201).json({ ok: true, message: 'Contraseña actualizada' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default updatePassword;