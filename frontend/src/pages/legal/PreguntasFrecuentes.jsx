import { useEffect } from 'react';
import BasicHeader from '../../components/BasicHeader.jsx';
import Footer from '../../components/Footer.jsx';
import Legalcontainer from '../../components/LegalContainer.jsx';

function PreguntasFrecuentes() {
  useEffect(() => {
    document.title = 'Preguntas frecuentes | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Legalcontainer>
        <div className='max-w-[900px] font-roboto text-negro'>
          <h1 className='text-center font-extrabold text-azul text-4xl'>
            Preguntas frecuentes
          </h1>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿Qué productos están disponibles y qué productos no?
          </h2>
          <p className='mt-6'>
            En nuestra plataforma todo producto visible tendra disponibilidad para 
            ser comprado, si un producto esta a punto de agotarse el producto tendrá 
            su aviso sobre el numero disponible e igualmente aparecerán los productos 
            que están agotados y cuanto tiempo tardaran en surtirse las bodegas. 
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿En cuánto tiempo tendré listo mi producto?
          </h2>
          <p className='mt-6'>
            Una vez se haya confirmado el pago en Hogarfy haremos el despacho del
            producto mediante nuestras transportadoras aliadas, Dependiendo de la zona 
            donde se encuentre ubicado nuestro cliente puede tardar de 3 a 5 días. 
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿Los productos tienen garantía?
          </h2>
          <p className='mt-6'>
            Todos nuestros productos tienen garantías y se le puede hacer 
            un reembolso al usuario o un cambio de articulo.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿En la plataforma mis datos estan protegidos?
          </h2>
          <p className='mt-6'>
            Sí, en Hogarfy respetamos 100% tu derecho a la protección de datos, 
            por esta razón, utilizamos los más altos niveles de seguridad para 
            proteger tanto tus datos personales como los de tus pagos.
          </p>
          <p className='mt-6'>
            Por favor, no compartas tu usuario ni la contraseña que te identifican 
            en nuestro sitio web, pues son el acceso a tu cuenta y a toda tu 
            información personal.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿Qué metodos de pago hay?
          </h2>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            ¿Qué datos de registran en la factura?
          </h2>
          <p className='mt-6'>
            Todos los datos que registraremos en tu factura, serán los datos 
            registrados como el titular de tu cuenta de Linio. Recuerda que 
            puedes verificar la información directamente desde tu perfil.
          </p>
          <p className='mt-6'>
            Lamentablemente, una vez registrada tu compra no podemos modificar 
            los datos de la factura, esto en cumplimiento del Decreto 3327 de 2009.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Reembolsos
          </h2>
          <p className='mt-6'>
            Después de un proceso de solicitud de devolución o una cancelación por 
            cualquier razón, iniciaremos el proceso de reembolso según la forma de 
            pago que elegiste o a través de un cupón.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Devoluciones
          </h2>
          <p className='mt-6'>
            Si no estás satisfecho con tu producto, puedes devolverlo completamente 
            gratis dentro de los 10 días naturales
          </p>
        </div>
      </Legalcontainer>
      <Footer />
    </>
  )
};

export default PreguntasFrecuentes;