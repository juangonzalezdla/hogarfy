import React from 'react';

function Header() {
  return (
    <header className="bg-azul py-[0] px-[3rem]">
      <nav className="w-[100%] max-w-[1400px] my-[o] mx-[auto] h-[70px] flex flex-row justify-between items-center">
        <a className="text-blanco font-poppins text-[1.6rem] font-bold no-underline" href="/">Hogarfy</a>
      </nav>
    </header>
  )
}

export default Header;