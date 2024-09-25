import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Links = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/dashboard/home',
    icon: 'bx bxs-dashboard bx-sm',
  },
  {
    id: 2,
    name: 'Productos',
    href: '/dashboard/products',
    icon: 'bx bxs-shopping-bags bx-sm',
  },
  {
    id: 3,
    name: 'Categorias',
    href: '/dashboard/categories',
    icon: 'bx bxs-category bx-sm',
  },
];

export default function NavLinks() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {Links.map((link) => (
        <Link
          to={link.href}
          key={link.id}
          className={clsx(
            'flex items-center p-2 text-dark-gray text-base font-medium rounded-lg transition-colors duration-200 hover:bg-blue hover:text-white',
            {
              'bg-blue text-white': pathname === link.href,
            }
          )}
        >
          <i className={link.icon + ' mr-2'}></i>
          {link.name}
        </Link>
      ))}
    </>
  );
}
