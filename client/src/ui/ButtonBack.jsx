import { Link } from 'react-router-dom';

export default function ButtonBack() {
  return (
    <>
      <Link
        to='/'
        className='w-40 bg-light-gray flex justify-center items-center gap-1 text-base text-dark-gray font-medium p-2 rounded-lg shadow-md'
      >
        <i className='bx bx-arrow-back md-sm'></i>
        Volver al inicio
      </Link>
    </>
  );
}
