import BasicHeader from '../../components/BasicHeader';
import { Button } from 'flowbite-react';
import { useUser } from '../../contexts/UserContext';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function AccountLayout({ children }) {
  const { getUser, userData } = useUser();
  const params = useParams();

  useEffect(() => {
    getUser(params.id);
  }, []);

  return (
    <>
      <BasicHeader />
      <main className='w-full max-w-[1400px] my-0 mx-auto py-12 px-12 flex flex-col justify-center items-center max-[678px]:px-4'>
        <div className='max-w-5xl'>
          <div className='mb-5'>
            <Link
              to='/'
              className='w-40 bg-light-gray flex justify-center items-center gap-1 text-base text-dark-gray font-medium p-2 rounded-lg shadow-md'
            >
              <i className='bx bx-arrow-back md-sm'></i>
              Volver al inicio
            </Link>

            <h1 className='font-bold text-blue text-3xl mt-10'>
              Editar perfil
            </h1>
          </div>

          <div className='w-full flex justify-center gap-10 max-md:flex-col'>
            <section className='max-w-80 bg-light-blue p-5 rounded-lg shadow-md'>
              <figure className='flex flex-col justify-center items-center'>
                <i className='bx bxs-user text-7xl bg-light-gray text-dark-gray p-5 rounded-full'></i>
              </figure>

              <div className='flex flex-col justify-center items-center gap-3 my-8'>
                <p className='text-dark-gray text-center font-bold text-base'>
                  {`Hola, ${userData?.names} ${userData?.lastNames}`}
                </p>
                <p className='text-dark-gray text-center font-bold text-base'>
                  {userData?.email}
                </p>
              </div>

              <div className='flex flex-col gap-3'>
                <Link to={`/account/${userData?._id}/my-account`}>
                  <Button className='w-full' color='purple'>Cambiar datos</Button>
                </Link>
                <Link to={`/account/${userData?._id}/update-email`}>
                  <Button className='w-full'>Cambiar email</Button>
                </Link>
                <Link to={`/account/${userData?._id}/update-password`}>
                  <Button className='w-full'>Cambiar contraseña</Button>
                </Link>
                <Link to={`/account/${userData?._id}/delete-account`}>
                  <Button className='w-full' color='failure'>Eliminar cuenta</Button>
                </Link>
              </div>
            </section>

            <section className='max-w-xl bg-light-blue p-5 rounded-lg shadow-md'>
              {children}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
