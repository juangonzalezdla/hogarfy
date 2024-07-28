import { Breadcrumb } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

export default function BreadcrumbPagination() {
  const location = useLocation();
  const pathnames = decodeURI(location.pathname)
    .split('/')
    .filter((x) => x);

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
        const isLast = index === pathnames.length - 1;
        const displayValue = value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <Breadcrumb.Item key={to}>
            {isLast ? (
              <span className='font-bold'>{displayValue}</span>
            ) : (
              <Link to={to}>{displayValue}</Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
