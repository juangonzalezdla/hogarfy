import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import IconLink from './IconLink';
import UserMenu from './UserMenu';
import { useCart } from '../contexts/CartContext';

export default function HeaderIcons() {
  const { isAuthenticated, user } = useAuth();
  const { cartProducts } = useCart();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className='flex flex-row items-center gap-5'>
        {isAuthenticated ? (
          <UserIcon onClick={handleClick} />
        ) : (
          <IconLink to='/auth/login' name='Ingresar'>
            <i className='bx bx-user bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
          </IconLink>
        )}
        <IconLink to='/orders' name='Ordenes'>
          <i className='bx bx-package bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
        </IconLink>
        <IconLink to='/cart' name='Carrito'>
          <span className='text-white text-xs font-bold absolute left-4 -top-1 group-hover:text-dark'>
            {cartProducts.length}
          </span>
          <i className='bx bx-cart bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
        </IconLink>
      </div>
      {show && <UserMenu user={user} setShow={setShow} />}
    </>
  );
}

function UserIcon({ onClick }) {
  return (
    <div
      onClick={onClick}
      className='flex flex-col justify-center items-center text-white cursor-pointer group'
    >
      <i className='bx bx-user bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
      <p className='text-xs font-semibold group-hover:underline'>Mi cuenta</p>
    </div>
  );
}
