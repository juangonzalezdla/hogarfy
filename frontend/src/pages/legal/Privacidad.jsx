import BasicHeader from '../../components/BasicHeader.jsx';
import LegalContainer from '../../components/LegalContainer.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect } from 'react';

function Privacidad() {
  useEffect(() => {
    document.title = 'Política de privacidad | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <LegalContainer>
        <div className='max-w-[900px] font-roboto text-negro'>
          <h1 className='text-center font-extrabold text-azul text-4xl'>
            Política de privacidad
          </h1>
          <p className='mt-6'>
            Tu privacidad a la hora de navegar por nuestro sitio web es un aspecto 
            de vital importancia para nosotros. Esta política de privacidad 
            te informará de todos los aspectos que debes conocer acerca de 
            cómo usamos, transferimos, almacenamos y protegemos la información 
            que nos proporciones.
          </p>
          <p className='mt-6'>
            El uso de nuestro sitio web, implica la aceptación de esta 
            política de privacidad.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Principios aplicados
          </h2>
          <p className='mt-6'>
            La base legal para el tratamiento de tus datos es tu consentimiento, 
            unido a una serie de principios que aplicamos:
          </p>
          <ul>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Principio de licitud, lealtad y transparencia
              </strong>
              Antes de recabar cualquier dato de carácter personal, serás debidamente 
              informado de ello y se solicitará tu consentimiento expreso, junto con 
              la finalidad para la que este dato se recaba. Nunca utilizaremos tus 
              datos para otra finalidad distinta.
            </li>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Principio de minimización de datos
              </strong>
              Sólo y exclusivamente se te solicitarán los datos personales estrictamente 
              necesarios para cumplir con su finalidad. Ni uno más.
            </li>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Principio de limitación del plazo de conservación
              </strong>
                Los datos serán mantenidos durante el tiempo que sea estrictamente necesario 
                para su finalidad o, en su defecto, durante el tiempo que marque la ley. 
                Los datos que hayan sido recabados y no sean utilizados, serán borrados.
            </li>
            <li className='my-2 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Principio de integridad y confidencialidad
              </strong>
              Aplicaremos todas las medidas de seguridad necesarias para que tus datos sean 
              almacenados de forma segura, garantizando que ninguna persona no autorizada 
              podrá acceder a ellos, y que éstos no podrán ser modificados sin tu 
              consentimiento.
            </li>
          </ul>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Normativa aplicable
          </h2>
          <p className='mt-6'>
            Conforme a lo establecido en la Ley 1581 de 2012. Hogarfy se compromete 
            a tomar las medidas necesarias para garantizar la seguridad de los 
            usuarios, evitando que se haga un uso indebido de los  datos personales 
            que nos proporcionan los usuarios en el sitio web. 
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Datos recogidos y su finalidad
          </h2>
          <p className='mt-6'>
            Hogarfy recopila y almacena datos personales de carácter identificativo, tales 
            como tu nombre y apellidos, email, dirección IP, datos de facturación…
          </p>
          <p className='mt-6'>
            La finalidad de estos datos es poder permitir que los usuarios puedan realizar
            sus compras en la plataforma de forma segura y nosotros como orginizacion estemos
            seguros que las compras las realiza una persona real.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Derechos sobre tus datos
          </h2>
          <p className='mt-6'>
            De acuerdo a la normativa vigente, tendrás los siguientes derechos 
            sobre tus datos de carácter personal recabados por Hogarfy
          </p>
          <ul>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Derecho de acceso
              </strong>
              Tendrás derecho a consultar los datos personales almacenados, 
              así como la información disponible sobre el origen de dichos datos 
              y, en caso de existir, las comunicaciones realizadas o previstas de 
              los mismos.
            </li>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Derecho de rectificación
              </strong>
              Tendrás derecho a que tus datos personales sean modificados en caso 
              de resultar inexactos o incompletos.
            </li>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Derecho de cancelacíón
              </strong>
              Tendrás derecho a que sean suprimidos todos aquellos datos que 
              resulten ser inadecuados o excesivos.
            </li>
            <li className='my-2 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Derecho de oposición
              </strong>
              Tendrás derecho a que no se lleve a cabo el tratamiento de tus datos 
              o se cese el tratamiento de los mismos, en caso de que no sean necesarios.
            </li>
            <li className='my-2 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Derecho de limitación
              </strong>
              Tendrás derecho a que sean recabados únicamente aquellos datos que sean 
              estrictamente necesarios.
            </li>
          </ul>
          <p className='mt-6'>
            Se entiende por datos necesarios, los que por ley estamos obligados a mantener, 
            incluso si ejerces el derecho de oposición. Un ejemplo de esto serían los 
            datos relativos a facturas emitidas.
          </p>
          <p className='mt-6'>
            Para ejercer cualquiera de tus derechos, bastará con enviar un correo 
            a info@lhogarfy.com indicando el derecho que deseas ejercer 
            y aportando una prueba de identidad legalmente válida que permita 
            identificar la propiedad de los datos en cuestión.
          </p>
          <p className='mt-6'>
            Hogarfy se compromete a tramitar cualquier tipo de ejercicio de tus derechos 
            en un periodo de tiempo no superior a 28 días naturales.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Aceptación y consentimiento
          </h2>
          <p className='mt-6'>
            Como usuario, declaras haber sido informado de las condiciones sobre 
            protección de datos de carácter personal, aceptando y consintiendo el 
            tratamiento de los mismos por parte de Hogarfy en la forma 
            y para las finalidades indicadas en esta política de privacidad.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Revocalidad
          </h2>
          <p className='mt-6'>
            El consentimiento que nos prestas, tanto para el tratamiento como para 
            la cesión de los datos, es revocable en cualquier momento mediante 
            el ejercicio de tus derechos.
          </p>
          <p className='mt-6'>
            Esta revocación en ningún caso tendrá carácter retroactivo.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Conservación
          </h2>
          <p className='mt-6'>
            Por defecto Hogarfy conservará tus datos durante el tiempo de 
            vida de la plataforma. 
          </p>
          <p className='mt-6'>
            En caso de que ejerzas tu derecho de oposición, únicamente 
            almacenaremos los datos mínimos necesarios por ley, durante 
            el tiempo que marque dicha ley.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Seguridad
          </h2>
          <p className='mt-6'>
            Hogarfy implementa todas las medidas de seguridad necesarias 
            para proteger tus datos, incluyendo mecanismos de autenticación, 
            autorización y cifrado.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Exactitud y veracidad de los datos
          </h2>
          <p className='mt-6'>
            Como usuario, eres el único responsable de la exactitud y veracidad 
            de los datos proporcionados a Hogarfy asumiendo la obligación de mantener 
            los mismos actualizados en caso de cualquier cambio.
          </p>
          <p className='mt-6'>
            La aceptación de esta política de privacidad implica un compromiso de 
            proporcionar información completa y correcta en cualquier caso.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Dónde recogemos tus datos
          </h2>
          <p className='mt-6'>
            Para Hogarfy es importante que conozcas las partes de nuestra web, 
            en las que recopilamos datos personales.
          </p>
          <ul>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Formulario de registro
              </strong>
              Formulario que se utiliza para registrarte en el sitio web, 
              tanto con el formulario estándar como con el registro a través 
              de un proveedor social.
            </li>
            <li className='my-4 ml-12 list-disc'>
              <strong className='mr-2 py-1 px-2 bg-oscuro text-blanco rounded-md'>
                Mi cuenta
              </strong>
              Apartado de mi cuenta, donde podrás modificar dicha información o 
              ampliar aquellos campos opcionales que voluntariamente consideres.
            </li>
          </ul>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Cesión de datos a terceros
          </h2>
          <p className='mt-6'>
            Hogarfy no vende, alquila ni cede datos personales que puedan 
            identificar al usuario, ni lo hará en un futuro, sin solicitar un 
            consentimiento expreso previo.
          </p>
          <p className='mt-6'>
            Para garantizar el correcto funcionamiento de la plataforma y realizar 
            tareas adicionales, fundamentalmente relacionadas con el marketing online, 
            es necesario que Hogarfy comparta datos con proveedores de servicios.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Modificaciones
          </h2>
          <p className='mt-6'>
            Hogarfy se reserva el derecho a modificar, en cualquier momento y 
            sin previo aviso, la presente política de privacidad para adaptarla 
            a los posibles cambios en la legislación, así como introducir 
            cualquier mejora o aclaración que permita un mejor entendimiento de 
            la misma.
          </p>
          <p className='mt-6'>
            Como usuario de la web, eres responsable de consultar de forma periódica 
            esta política, para poder estar al tanto de las novedades. Para 
            facilitar esta tarea, al final del presente documento podrás encontrar 
            la información relativa a la fecha de última actualización.
          </p>
        </div>
      </LegalContainer>
      <Footer />
    </>
  )
};

export default Privacidad;