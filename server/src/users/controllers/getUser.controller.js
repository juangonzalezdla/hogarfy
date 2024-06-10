import userModel from '../model/user.schema.js';

const getUser = async (req, res) => {
  try {
    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });

    return res.status(200).json(userById);
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default getUser;