import { Breadcrumb } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

export default function CategoriesNavbar() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb aria-label='Default breadcrumb example'>
      <Breadcrumb.Item>
        <i className='bx bxs-home bx-xs mr-1'></i>
        <Link to='/' className='hover:underline'>
          Inicio
        </Link>
      </Breadcrumb.Item>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={to}>
            <Link to={to}>{value}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
