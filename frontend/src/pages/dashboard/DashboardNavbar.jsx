import { Link, useLocation } from 'react-router-dom';

function DashboardNavbar() {
  const inactiveLink = '';
  const activeLink = 'flex items-center p-2 bg-gris-claro text-gris-oscuro rounded-lg hover:bg-gris-claro group';
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside className='w-60 h-screen transition-transform'>
      <nav className='h-full px-3 py-4 bg-azul-palido'>
        <h2 className='text-azul font-poppins text-2xl font-bold'>
          <i className='bx bxs-store text-2xl'></i>
          <span className='ml-2'>Hogarfy</span>
        </h2>
        
        <div className='font-medium text-lg mt-5 space-y-2'>
          <Link 
            to={'/dashboard'} 
            className={pathname === '/dashboard' ? activeLink : inactiveLink + ' flex items-center p-2 text-gris-oscuro rounded-lg hover:bg-gris-claro group'}
          >
            <i className='bx bxs-dashboard text-2xl'></i>
            <span className='ml-2'>Dashboard</span>
          </Link>
            
          <Link 
            to={'/dashboard/products'} 
            className={pathname === '/dashboard/products' ? activeLink : inactiveLink + ' flex items-center p-2 text-gris-oscuro rounded-lg hover:bg-gris-claro group'}
          >
            <i className='bx bxs-shopping-bags text-2xl'></i>
            <span className='ml-2'>Productos</span>
          </Link>

          <Link 
            to={'/dashboard/categories'}
            className={pathname === '/dashboard/categories' ? activeLink : inactiveLink + ' flex items-center p-2 text-gris-oscuro rounded-lg hover:bg-gris-claro group'}
          >
            <i className='bx bxs-category text-2xl'></i>
            <span className='ml-2'>Categorias</span>
          </Link>

          <Link 
            to={'/dashboard/orders'} 
            className={pathname === '/dashboard/orders' ? activeLink : inactiveLink + ' flex items-center p-2 text-gris-oscuro rounded-lg hover:bg-gris-claro group'}
          >
            <i className='bx bxs-detail text-2xl'></i>
            <span className='ml-2'>Ordenes</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
};

export default DashboardNavbar;