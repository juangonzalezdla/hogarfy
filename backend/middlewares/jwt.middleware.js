import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_PRIVATE_KEY, { expiresIn: '3d' },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

export const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) 
    return res.status(401).send({ message: ['Usuario no autorizado'] });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, user) => {
    if (error) 
      return res.status(401).send({ message: ['Usuario no autorizado'] });

    req.user = user;

    next();
  });
};