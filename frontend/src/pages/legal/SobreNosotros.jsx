import BasicHeader from '../../components/BasicHeader.jsx';
import Footer from '../../components/Footer.jsx';
import Legalcontainer from '../../components/LegalContainer.jsx';
import ilustration from '../../assets/shopping__bags.svg';
import { useEffect } from 'react';

function SobreNosotros() {
  useEffect(() => {
    document.title = 'Sobre nosotros | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Legalcontainer>
        <div className='max-w-[1200px] font-roboto text-negro'>
          <h1 className='text-center font-extrabold text-azul text-4xl'>
            ¿Quiénes somos?
          </h1>
          <div className='w-full my-10 flex flex-row justify-centar items-center gap-10'>
            <div className='w-[600px]'>
              <p className='text-lg mt-6'>
                Somos una empresa la cuál funciona como un ecommerce, que busca 
                hacer de la venta por internet de todo tipo de articulos que 
                usamos en nuestra vida diaria una experiencia más facil y satisfactoria.
              </p>
              <p className='text-lg mt-6'>
                Queremos en 5 años ser de las plataformas online de ventas de productos
                más reconocida y con mayor flujo de usuarios.
              </p>
              <h2 className='font-extrabold text-azul text-2xl mt-12'>
                Contacto
              </h2>
              <p className='text-lg mt-6'>
                Frente a cualquier inquietud puedes comunicarte al siguiente 
                correo electronico:
                <strong className='ml-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                  info@hogarfy.com
                </strong>
              </p>
              <p className='text-lg mt-6'>
                Igualmente de invitamos a seguirnos en nuestras redes sociales
              </p>
            </div>
            <img src={ilustration} className='w-[400px]' />
          </div>
        </div>
      </Legalcontainer>
      <Footer />
    </>
  )
};

export default SobreNosotros;