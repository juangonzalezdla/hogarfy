import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthContext';

const sidebarLinks = [
  {
    id: 1,
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'bx bxs-dashboard bx-sm',
  },
  {
    id: 2,
    name: 'Productos',
    to: '/dashboard/products',
    icon: 'bx bxs-shopping-bags bx-sm',
  },
  {
    id: 3,
    name: 'Categorias',
    to: '/dashboard/categories',
    icon: 'bx bxs-category bx-sm',
  },
];

export default function DashboardSidebar({ show }) {
  const { logOut } = useAuth();
  const inactiveLink =
    'flex items-center p-2 text-dark-gray rounded-lg transition-colors duration-200 hover:bg-light-gray group';
  const activeLink =
    'flex items-center p-2 bg-light-gray text-dark-gray rounded-lg group';
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside
      className={
        (show ? 'left-0' : '-left-full') +
        ' fixed top-0 p-4 w-full bg-light-blue h-full md:static md:w-52 transition-all z-10 rounded-r-xl'
      }
    >
      <nav className='flex flex-col gap-3'>
        <div className='font-medium text-base space-y-2'>
          {sidebarLinks.map((link) => (
            <Link
              to={link.to}
              className={pathname === link.to ? activeLink : inactiveLink}
            >
              <i className={link.icon + ' mr-2'}></i>
              {link.name}
            </Link>
          ))}

          <hr />

          <Link
            to={'/'}
            className='flex items-center p-2 text-red-700 rounded-lg transition-colors duration-200 hover:bg-red-100 group'
            onClick={() => {
              logOut();
            }}
          >
            <i className='bx bx-log-out bx-sm mr-2'></i>
            Salir
          </Link>
        </div>
      </nav>
    </aside>
  );
}
