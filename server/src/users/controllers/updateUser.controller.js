import userModel from '../model/user.schema.js';

const updateUser = async (req, res) => {
  try {
    const { names, lastNames, phoneNumber, cityAndDepartment, address } = req.body;

    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });

    userById.names = names;
    userById.lastNames = lastNames;
    userById.phoneNumber = phoneNumber;
    userById.cityAndDepartment = cityAndDepartment;
    userById.address = address;
    await userById.save();

    return res.status(201).json({ ok: true, message: 'Datos actualizados' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default updateUser;