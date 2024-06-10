import userModel from '../../users/model/user.schema.js';
import { hash } from 'bcrypt';
import { SALT } from '../helpers/salt.js';
import { v4 as uuidv4 } from 'uuid';

const logUp = async (req, res) => {
  try {
    const { names, lastNames, citizenshipCard, phoneNumber,
      cityAndDepartment, address, email, password } = req.body;

    const userByEmail = await userModel.findOne({ email });
    if (userByEmail)
      return res
        .status(409)
        .json({ ok: false, message: 'Ya existe un usuario con ese email registrado' });

    const hashedPassword = await hash(password, SALT);

    const user = new userModel({
      _id: uuidv4(),
      names,
      lastNames,
      citizenshipCard,
      phoneNumber,
      cityAndDepartment,
      address,
      email,
      password: hashedPassword
    });
    await user.save();

    return res.status(201).json({ ok: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message })
  }
}

export default logUp;
