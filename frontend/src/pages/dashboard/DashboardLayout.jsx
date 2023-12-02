import DashboardNavbar from './DashboardNavbar.jsx';


function DashboardLayout({ children }) {
  return (
    <div className='flex'>
      <DashboardNavbar />
      <div className='flex-grow p-4'>
        {children}
      </div>
    </div>
  )
};

export default DashboardLayout;