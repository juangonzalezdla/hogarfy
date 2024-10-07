const logOut = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'None', 
    expires: new Date(0)
  });
  res.status(200).json({ ok: true, message: 'Cierre de sesión exitoso' });
};

export default logOut;