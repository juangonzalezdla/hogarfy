import BasicHeader from '../../components/BasicHeader';
import { Link } from 'react-router-dom';

export default function UnauthorizedPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-10'>
      <i className='bx bx-x-circle text-9xl text-dark-gray'></i>

      <h1 className='text-2xl font-semibold text-dark-gray'>
        Para ingresar a esta página deber ser un Usuario Administrador
      </h1>

      <Link to='/'>
        <button className='bg-blue px-10 py-2.5 text-base text-white font-bold rounded-full'>
          Ir al inicio
        </button>
      </Link>
    </div>
  );
}
