import { useState } from 'react';
import IconLink from './IconLink';
import { useAuth } from '../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <header className="bg-azul py-0 px-12">
      <nav className="w-full max-w-[1400px] my-o mx-auto h-20 
        flex flex-row justify-between items-center">
        <figure>
          <a className="text-blanco font-poppins text-[1.8rem] 
          font-bold no-underline" href="/">Hogarfy</a>
        </figure>

        <div className='w-[400px] flex flex-row items-center'>
          <input 
            type="text" 
            placeholder="Buscar en Hogarfy" 
            className='w-full h-10 bg-blanco font-roboto text-base text-negro 
            px-3 border-2 border-solid border-transparent rounded-l-lg
            focus:outline-none' 
          />
          <button 
            className='bg-blanco w-20 h-10 rounded-r-lg border-2 border-solid 
            border-blanco hover:bg-gris-claro flex justify-center items-center'
          >
            <i className='bx bx-search text-2xl text-azul font-bold'></i>
          </button>
        </div>

        <div className='flex flex-row items-center gap-2'>
          {isAuthenticated ? (
            <>
              <div 
                onClick={handleClick}
                className='text-blanco hover:text-gris-oscuro cursor-pointer'
              >
                <i className='bx bx-user text-3xl font-medium py-2 px-3 
                hover:bg-gris-claro rounded-full'></i>
              </div>
            </>
          ) : (
            <>
              <IconLink to='/login'>
                <i className='bx bx-user text-3xl font-medium py-2 px-3 
                 hover:bg-gris-claro rounded-full'></i>
              </IconLink>
            </>
          )}
            
          <IconLink to='/pedidos'>
            <i className='bx bx-package text-3xl font-medium py-2 px-3 
            hover:bg-gris-claro rounded-full'></i>
          </IconLink>

          <IconLink to='/carrito'>
            <i className='bx bx-cart text-3xl font-medium py-2 px-3 
            hover:bg-gris-claro rounded-full'></i>
          </IconLink>
        </div>
      </nav>

      {show && <div className='absolute top-20 right-24 bg-blanco w-48 p-4 rounded-lg 
        shadow-lg flex flex-col gap-3'>
        
        <Link
          to='/perfil' 
          className='flex justify-center items-center gap-2 text-lg text-gris-oscuro
          font-medium p-2 rounded-lg hover:bg-gris-claro'
        >
          <i className='bx bx-cog text-2xl'></i>
          Mi perfil
        </Link>
        <hr />
        <Link
          to='/login'
          onClick={() => {
            logout();
          }}
          className='flex justify-center items-center gap-2 text-lg text-red-700 
          font-semibold p-2 rounded-lg hover:bg-red-100'
        >
          <i className='bx bx-log-out text-red-700 text-2xl'></i>
          Cerrar sesión
        </Link>
      </div>}
    </header>
  )
}

export default Header;