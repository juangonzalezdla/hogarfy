const authorizeAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'No eres un administrador' });
  }
  next();
};

export default authorizeAdmin;