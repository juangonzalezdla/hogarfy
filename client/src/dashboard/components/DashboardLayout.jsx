import { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';

export default function DashboardLayout({ pageTitle, children }) {
  const [showSidebar, setshowSidebar] = useState(false);

  return (
    <div className='bg-white max-h-full'>
      <div className='flex items-center p-4 md:hidden'>
        <button onClick={() => setshowSidebar(true)}>
          <i className='bx bx-menu bx-md'></i>
        </button>
      </div>

      <div className='flex gap-5'>
        <DashboardSidebar show={showSidebar} />

        <div className='flex-grow p-4'>
          <h1 className='text-blue font-poppins text-lg font-bold mb-5'>
            {pageTitle}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
