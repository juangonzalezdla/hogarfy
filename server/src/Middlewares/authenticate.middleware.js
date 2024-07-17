import jwt from 'jsonwebtoken';

const authenticate = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ ok: false, message: 'Usuario no autorizado' });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (error, user) => {
    if (error)
      return res.status(401).json({ ok: false, message: 'Usuario no autorizado' });

    req.user = user;
    next();
  });
};

export default authenticate;