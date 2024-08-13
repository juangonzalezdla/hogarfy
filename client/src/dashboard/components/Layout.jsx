import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ pageTitle, children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='w-full h-screen'>
      {showNav && (
        <div className='content-none fixed z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]'></div>
      )}

      <div className='flex gap-5 h-full max-md:flex-col max-md:gap-0'>
        <div className='md:hidden p-2'>
          <button onClick={() => setShowNav(true)}>
            <i className='bx bx-menu bx-md'></i>
          </button>
        </div>

        <Sidebar show={showNav} onClose={() => setShowNav(false)} />

        <div className='flex-grow w-full bg-light-blue p-4 rounded-l-xl ml-60 max-md:ml-0'>
          <h1 className='text-blue font-poppins text-lg font-bold mb-3 max-md:text-center'>
            {pageTitle}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
