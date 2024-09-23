import { useEffect } from 'react';
import BasicHeader from '../../ui/BasicHeader';
import Main from '../../ui/legal/Main';
import Title from '../../ui/legal/Title';
import Subtitle from '../../ui/legal/Subtitle';
import StrongText from '../../ui/legal/StrongText';
import Footer from '../../ui/Footer';
import Ilustration from '../../assets/shopping__bags.svg';

export default function AboutUs() {
  useEffect(() => {
    document.title = 'Sobre nosotros | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Main>
        <Title title='¿Quiénes somos?' />

        <div className='w-full my-10 flex flex-row justify-centar items-center gap-10 max-md:flex-col'>
          <div className='max-w-[50%] max-md:max-w-full'>
            <article className='mb-10'>
              <p className='mb-5'>
                Somos una empresa la cuál funciona como un ecommerce, que busca
                hacer de la venta por internet de todo tipo de articulos que
                usamos en nuestra vida diaria una experiencia más facil y
                satisfactoria.
              </p>
              <p className='mb-5'>
                Queremos en 5 años ser de las plataformas online de ventas de
                productos más reconocida y con mayor flujo de usuarios.
              </p>
            </article>
            <article className='mb-10'>
              <Subtitle subtitle='Contacto' />
              <p className='mb-5'>
                Frente a cualquier inquietud puedes comunicarte al siguiente
                correo electronico: <StrongText text='info@hogarfy.com' />
              </p>
              <p className='mb-5'>
                Igualmente de invitamos a seguirnos en nuestras redes sociales.
              </p>
            </article>
          </div>
          <div className='max-w-[50%] max-md:max-w-full'>
            <img
              src={Ilustration}
              className='w-full'
              alt='Imagen sobre compras online'
            />
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
