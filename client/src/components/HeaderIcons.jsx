import { useAuth } from '../auth/context/AuthContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconLink from './IconLink';

export default function HeaderIcons() {
  const { isAuthenticated, logOut, user } = useAuth();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className='flex flex-row items-center gap-5'>
        {isAuthenticated ? (
          <>
            <div
              onClick={handleClick}
              className='flex flex-col justify-center items-center text-white cursor-pointer group'
            >
              <i className='bx bx-user bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
              <p className='text-xs font-semibold group-hover:underline'>
                Mi cuenta
              </p>
            </div>
          </>
        ) : (
          <>
            <IconLink to='/auth/login' name='Ingresar'>
              <i className='bx bx-user bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
            </IconLink>
          </>
        )}

        <IconLink to='/orders' name='Ordenes'>
          <i className='bx bx-package bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
        </IconLink>

        <IconLink to='/cart' name='Carrito'>
          <i className='bx bx-cart bx-sm p-1 group-hover:bg-white group-hover:text-dark rounded-full'></i>
        </IconLink>
      </div>

      {show && (
        <div className='absolute top-20 right-24 bg-white w-48 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-20'>
          <span className='font-roboto text-center text-dark text-base font-bold'>
            ¡Hola, {user?.names}!
          </span>

          <Link
            to={`/account/${user._id}/my-account`}
            className='flex justify-start items-center gap-2 text-lg text-dark-gray font-medium p-2 rounded-lg hover:bg-light-gray'
          >
            <i className='bx bx-cog bx-sm'></i>
            Mi cuenta
          </Link>
          <hr />
          <Link
            to='/'
            onClick={() => {
              logOut();
              setShow(false);
            }}
            className='flex justify-start items-center gap-2 text-lg text-red-700 font-semibold p-2 rounded-lg hover:bg-red-100'
          >
            <i className='bx bx-log-out bx-sm text-red-700'></i>
            Cerrar sesión
          </Link>
        </div>
      )}
    </>
  );
}
