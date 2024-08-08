import userModel from '../../users/model/user.schema.js';
import jwt from 'jsonwebtoken';

const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ ok: false, message: 'Usuario no autorizado' });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (error, user) => {
    if (error)
      return res.status(401).json({ ok: false, message: 'Usuario no autorizado' });

    const userById = await userModel.findById(user.id);
    if (!userById)
      return res.status(401).json({ ok: false, message: 'Usuario no autorizado' });

    const { _id, names, lastNames, identificationCard, phoneNumber, cityAndDepartment, address, email, isAdmin } = userById;

    return res.json({ _id, names, lastNames, identificationCard, phoneNumber, cityAndDepartment, address, email, isAdmin });
  });
};

export default verifyToken;