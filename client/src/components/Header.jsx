import { useState, useEffect } from 'react';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='bg-azul py-2 px-12 max-md:px-4'>
      {windowWidth < breakpoint ? (
        <nav className='w-full max-w-[1400px] my-o mx-auto min-h-[70px] flex flex-col justify-between items-center'>
          <div className='w-full max-w-[1400px] my-o mx-auto flex justify-between items-center mb-2'>
            <Logo />
            <HeaderIcons />
          </div>

          <SearchBar />
        </nav>
      ) : (
        <nav className='w-full max-w-[1400px] my-o mx-auto h-16 flex justify-between items-center'>
          <Logo />
          <SearchBar />
          <HeaderIcons />
        </nav>
      )}
    </header>
  );
}
