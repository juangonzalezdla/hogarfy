import userModel from '../model/user.schema.js';
import { compare } from 'bcrypt';

const deleteUser = async (req, res) => {
  try {
    const { password } = req.body;

    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });

    const checkPassord = compare(password, userById.password);
    if (!checkPassord)
      return res.status(401).json({ ok: false, message: 'Contraseña incorrecta' });

    await userById.deleteOne();

    return res.status(204).json({ ok: true, message: 'Usuario eliminado' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default deleteUser;