import React from 'react';
import IconLink from './IconLink';

function Header() {
  return (
    <header className="bg-azul py-[0] px-[3rem]">
      <nav className="w-[100%] max-w-[1400px] my-[o] mx-[auto] h-[80px] 
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
            border-blanco hover:bg-gris-claro flex justify-center items-center'>
            <i className='bx bx-search text-2xl text-azul font-bold'></i>
          </button>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <IconLink to='/login'>
            <i className='bx bx-user text-3xl font-medium py-2 px-3 
            hover:bg-gris-claro rounded-full'></i>
          </IconLink>

          <IconLink to='/orders'>
            <i className='bx bx-package text-3xl font-medium py-2 px-3 
            hover:bg-gris-claro rounded-full'></i>
          </IconLink>

          <IconLink to='/cart'>
            <i className='bx bx-cart text-3xl font-medium py-2 px-3 
            hover:bg-gris-claro rounded-full'></i>
          </IconLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;