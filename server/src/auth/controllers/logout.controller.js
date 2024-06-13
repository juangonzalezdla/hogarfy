const logOut = (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ ok: true, message: 'Cierre de sesión exitoso' });
};

export default logOut;