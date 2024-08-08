import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function UserMenu({ user, setShow }) {
  const { logOut, isAuthorized } = useAuth();

  const handleLogout = () => {
    logOut();
    setShow(false);
  };

  return (
    <div className='absolute top-20 right-24 bg-white w-48 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-20'>
      <span className='font-roboto text-center text-dark text-base font-bold'>
        ¡Hola, {user.names}!
      </span>
      <Link
        to={`/account/${user._id}/my-account`}
        className='flex justify-start items-center gap-2 text-base text-dark-gray font-medium p-2 rounded-lg hover:bg-light-gray'
      >
        <i className='bx bx-cog bx-sm'></i>
        Mi cuenta
      </Link>
      {isAuthorized && (
        <Link
          to='/dashboard/home'
          className='flex justify-start items-center gap-2 text-base text-dark-gray font-medium p-2 rounded-lg hover:bg-light-gray'
        >
          <i className='bx bxs-dashboard bx-sm'></i>
          Ir al dashboard
        </Link>
      )}
      <hr />
      <Link
        to='/'
        onClick={handleLogout}
        className='flex justify-start items-center gap-2 text-base text-red-700 font-bold p-2 rounded-lg hover:bg-red-100'
      >
        <i className='bx bx-log-out bx-sm text-red-700'></i>
        Cerrar sesión
      </Link>
    </div>
  );
}
