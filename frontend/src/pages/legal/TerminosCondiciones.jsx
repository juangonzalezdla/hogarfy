import { useEffect } from 'react';
import BasicHeader from '../../components/BasicHeader.jsx';
import Footer from '../../components/Footer.jsx';
import LegalContainer from '../../components/LegalContainer.jsx';

function TerminosCondiciones() {
  useEffect(() => {
    document.title = 'Términos y condiciones | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <LegalContainer>
        <div className='max-w-[900px] font-roboto text-negro'>
          <h1 className='text-center font-extrabold text-azul text-4xl'>
            Términos y condiciones
          </h1>
          <p className='mt-6'>
            El presente contrato describe los términos y condiciones aplicables 
            al uso del contenido, productos y/o servicios del sitio web hogarfy 
            del cual es titular Juan David Gonzalez, Luis Pastrana (Empresa Ideal 
            Software). Para hacer uso del contenido de productos y/o servicios del 
            sitio web el usuario deberá sujetarse a los presentes términos y condiciones
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Objeto
          </h2>
          <p className='mt-6'>
            El objeto es regular el acceso y la utilización del contenido productos 
            y/o servicios a disposición del público general en el dominio 
            <a className='ml-1 text-azul underline' href="">https://www.hogarfy.com/</a>
          </p>
          <ul>
            <li className='my-4 ml-12 list-disc'>
              El titular se reserva el derecho de realizar cualquier tipo de 
              modificación en el sitio web en cualquier momento y sin previo aviso, 
              el usuario acepta dichas condiciones.
            </li>
            <li className='my-4 ml-12 list-disc'>
              El acceso al sitio web por parte del usuario es libre y gratuito, 
              la utilización del contenido, productos. 
            </li>
            <li className='my-4 ml-12 list-disc'>
              El sitio web sólo admite el acceso a personas mayores de edad y 
              no se hace responsable por el incumplimiento de esto.
            </li>
            <li className='my-4 ml-12 list-disc'>
              El sitio web está dirigido a usuarios residentes de colombia y 
              cumple con la legislación establecida en dicho país si el usuario 
              reside en otro país accede al sitio podrá observar los productos 
              pero no podrá hacer envíos a su lugar de residencia
            </li>
            <li className='my-4 ml-12 list-disc'>
              La administración del sitio web puede ejercerse por terceros es decir 
              que personas distintas al titular sin afectar los presentes términos 
              y condiciones 
            </li>
          </ul>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Usuario
          </h2>
          <p className='mt-6'>
            Las actividades del usuario en el sitio web como ver las publicaciones 
            de los productos o escribir reseñas sobre ellos estará sujeta a los 
            presentes términos y condiciones. El usuario se compromete a utilizar el 
            contenido, productos y/o servicios de forma lícita sin faltar a la moral 
            o al orden público, absteniéndose de realizar cualquier acto que afecte a 
            los derechos de terceros o del funcionamiento del sitio web.
          </p>
          <p className='mt-6'>
            El usuario se compromete a promocionar información verídica en los 
            formularios del sitio web.
          </p>
          <p className='mt-6'>
            El acceso al sitio web no supone una relación entre el usuario y el 
            titular del sitio web. El usuario manifiesta ser mayor de edad y contar 
            con la capacidad jurídica de acatar los presentes términos y condiciones.
          </p>
          <h2 className='font-extrabold text-azul text-2xl mt-12'>
            Acceso y navegación en el sitio web
          </h2>
          <p className='mt-6'>
            El titular no garantiza la continuidad y disponibilidad del contenido, 
            productos y/o servicios en el sitio web, realizará acciones que fomenten 
            el buen funcionamiento de dicho sitio web sin responsabilidad alguna. 
          </p>
          <p className='mt-6'>
            l titular no se responsabiliza que el software esté libre de errores que 
            puedan causar daño a la página web de una u otra forma nuestro equipo 
            estará trabajando lo más pronto posible para solucionar el error.
          </p>
        </div>
      </LegalContainer>
      <Footer />
    </>
  )
};

export default TerminosCondiciones;