import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import BasicHeader from '../components/BasicHeader.jsx';
import { Link } from 'react-router-dom';

function Profile() {
  const { user } = useAuth();
  console.log(user)

  useEffect(() => {
    document.title = 'Mi cuenta | Hogarfy';
  }, []);
  
  return (
    <>
      <BasicHeader />
      <main className='w-full max-w-[1400px] my-0 mx-auto py-6 px-12 
        flex flex-col'>
        <div className='max-w-[1000px]'>
          <Link
            to='/' 
            className='w-40 flex items-center gap-1 text-base text-gris-oscuro
            font-medium p-2 rounded-lg hover:bg-gris-claro'
          >
            <i className='bx bx-chevron-left text-[25px]'></i>
            Volver al inicio
          </Link>
          <h1 className='font-bold text-azul text-3xl my-5'>Editar perfil</h1>

          <div className='flex'>
            <section>
              <h1>{user.email}</h1>
            </section>
            <section>

            </section>
          </div>
        </div>
      </main>
    </>
  )
};

export default Profile;