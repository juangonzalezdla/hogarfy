import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

export default function Sidebar({ show, onClose }) {
  return (
    <aside
      className={
        (show
          ? ''
          : 'transition-transform -translate-x-full md:translate-x-0') +
        ' h-full w-56 fixed top-0 left-0 z-10 overflow-x-hidden p-4 bg-light-blue rounded-r-xl max-md:bg-white max-md:w-2/3'
      }
    >
      <nav className='flex h-full flex-col space-y-3'>
        <div className='flex items-center justify-between mb-5'>
          <Link to='/' className='text-blue font-poppins text-2xl font-bold'>
            Hogarfy
          </Link>

          {show && (
            <button
              onClick={onClose}
              className='text-dark-gray hover:bg-light-gray rounded-lg p-1.5 absolute top-2.5 end-2.5 inline-flex items-center'
            >
              <i className='bx bx-x bx-sm'></i>
            </button>
          )}
        </div>

        <NavLinks />

        <div className='pt-4 border-t-2'>
          <Link
            to={'/'}
            className='flex items-center p-2 bg-red-200 text-red-700 rounded-lg'
          >
            <i className='bx bx-log-out bx-sm mr-2'></i>
            Salir
          </Link>
        </div>
      </nav>
    </aside>
  );
}
