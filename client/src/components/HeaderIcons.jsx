import { useAuth } from '../auth/context/AuthContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HeaderIcons() {
  const { isAuthenticated, logout, user } = useAuth();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>{user?.names}</div>
  )
}
