import { Link } from 'react-router-dom';

export default function IconLink({ to, name, children }) {
  return (
    <Link
      to={to}
      className='flex flex-col justify-center items-center text-white relative group'
    >
      {children}
      <p className='text-xs font-semibold group-hover:underline'>{name}</p>
    </Link>
  );
}
