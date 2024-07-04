import { useEffect } from 'react';
import BasicHeader from '../../components/BasicHeader';
import Main from '../components/Main';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import StrongText from '../components/StrongText';
import Footer from '../../components/Footer';

const privacyPolicies = [
  {
    id: 1,
    name: '',
    texts: [
      'Tu privacidad a la hora de navegar por nuestro sitio web es un aspecto de vital importancia para nosotros. Esta política de privacidad te informará de todos los aspectos que debes conocer acerca de cómo usamos, transferimos, almacenamos y protegemos la información que nos proporciones.',
      'El uso de nuestro sitio web, implica la aceptación de esta política de privacidad.',
    ],
    lists: [],
  },
  {
    id: 2,
    name: 'Principios aplicados',
    texts: [
      'La base legal para el tratamiento de tus datos es tu consentimiento, unido a una serie de principios que aplicamos:',
    ],
    lists: [
      {
        strong: 'Principio de licitud, lealtad y transparencia',
        text: 'Antes de recabar cualquier dato de carácter personal, serás debidamente informado de ello y se solicitará tu consentimiento expreso, junto con la finalidad para la que este dato se recaba. Nunca utilizaremos tus datos para otra finalidad distinta.',
      },
      {
        strong: 'Principio de minimización de datos',
        text: 'Sólo y exclusivamente se te solicitarán los datos personales estrictamente necesarios para cumplir con su finalidad. Ni uno más.',
      },
      {
        strong: 'Principio de limitación del plazo de conservación',
        text: 'Los datos serán mantenidos durante el tiempo que sea estrictamente necesario para su finalidad o, en su defecto, durante el tiempo que marque la ley. Los datos que hayan sido recabados y no sean utilizados, serán borrados.',
      },
      {
        strong: 'Principio de integridad y confidencialidad',
        text: 'Aplicaremos todas las medidas de seguridad necesarias para que tus datos sean almacenados de forma segura, garantizando que ninguna persona no autorizada podrá acceder a ellos, y que éstos no podrán ser modificados sin tu consentimiento',
      },
    ],
  },
  {
    id: 3,
    name: 'Normativa aplicable',
    texts: [
      'Conforme a lo establecido en la Ley 1581 de 2012. Hogarfy se compromete a tomar las medidas necesarias para garantizar la seguridad de los usuarios, evitando que se haga un uso indebido de los datos personales que nos proporcionan los usuarios en el sitio web.',
    ],
    lists: [],
  },
  {
    id: 4,
    name: 'Datos recogidos y su finalidad',
    texts: [
      'Hogarfy recopila y almacena datos personales de carácter identificativo, tales como tu nombre y apellidos, email, dirección IP, datos de facturación.',
      'La finalidad de estos datos es poder permitir que los usuarios puedan realizar sus compras en la plataforma de forma segura y nosotros como orginizacion estemos seguros que las compras las realiza una persona real.',
    ],
    lists: [],
  },
  {
    id: 5,
    name: 'Derechos sobre tus datos',
    texts: [
      'Se entiende por datos necesarios, los que por ley estamos obligados a mantener, incluso si ejerces el derecho de oposición. Un ejemplo de esto serían los datos relativos a facturas emitidas.',
      'Para ejercer cualquiera de tus derechos, bastará con enviar un correo a info@lhogarfy.com indicando el derecho que deseas ejercer y aportando una prueba de identidad legalmente válida que permita identificar la propiedad de los datos en cuestión.',
      'Hogarfy se compromete a tramitar cualquier tipo de ejercicio de tus derechos en un periodo de tiempo no superior a 28 días naturales.',
      'De acuerdo a la normativa vigente, tendrás los siguientes derechos sobre tus datos de carácter personal recabados por Hogarfy:',
    ],
    lists: [
      {
        strong: 'Derecho de acceso',
        text: 'Tendrás derecho a consultar los datos personales almacenados, así como la información disponible sobre el origen de dichos datos y, en caso de existir, las comunicaciones realizadas o previstas de los mismos.',
      },
      {
        strong: 'Derecho de rectificación',
        text: 'Tendrás derecho a que tus datos personales sean modificados en caso de resultar inexactos o incompletos.',
      },
      {
        strong: 'Derecho de cancelacíón',
        text: 'Tendrás derecho a que sean suprimidos todos aquellos datos que resulten ser inadecuados o excesivos.',
      },
      {
        strong: 'Derecho de oposición',
        text: 'Tendrás derecho a que no se lleve a cabo el tratamiento de tus datos o se cese el tratamiento de los mismos, en caso de que no sean necesarios.',
      },
      {
        strong: 'Derecho de limitación',
        text: 'Tendrás derecho a que sean recabados únicamente aquellos datos que sean estrictamente necesarios.',
      },
    ],
  },
  {
    id: 6,
    name: 'Aceptación y consentimiento',
    texts: [
      'Como usuario, declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptando y consintiendo el tratamiento de los mismos por parte de Hogarfy en la forma y para las finalidades indicadas en esta política de privacidad.',
    ],
    lists: [],
  },
  {
    id: 7,
    name: 'Revocalidad',
    texts: [
      'El consentimiento que nos prestas, tanto para el tratamiento como para la cesión de los datos, es revocable en cualquier momento mediante el ejercicio de tus derechos.',
      'Esta revocación en ningún caso tendrá carácter retroactivo.',
    ],
    lists: [],
  },
  {
    id: 8,
    name: 'Conservación',
    texts: [
      'Por defecto Hogarfy conservará tus datos durante el tiempo de vida de la plataforma.',
      'En caso de que ejerzas tu derecho de oposición, únicamente almacenaremos los datos mínimos necesarios por ley, durante el tiempo que marque dicha ley.',
    ],
    lists: [],
  },
  {
    id: 9,
    name: 'Seguridad',
    texts: [
      'Hogarfy implementa todas las medidas de seguridad necesarias para proteger tus datos, incluyendo mecanismos de autenticación, autorización y cifrado.',
    ],
    lists: [],
  },
  {
    id: 10,
    name: 'Exactitud y veracidad de los datos',
    texts: [
      'Como usuario, eres el único responsable de la exactitud y veracidad de los datos proporcionados a Hogarfy asumiendo la obligación de mantener los mismos actualizados en caso de cualquier cambio.',
      'La aceptación de esta política de privacidad implica un compromiso de proporcionar información completa y correcta en cualquier caso.',
    ],
    lists: [],
  },
  {
    id: 11,
    name: 'Dónde recogemos tus datos',
    texts: [
      'Para Hogarfy es importante que conozcas las partes de nuestra web, en las que recopilamos datos personales.',
    ],
    lists: [
      {
        strong: 'Formulario de registro',
        text: 'Formulario que se utiliza para registrarte en el sitio web, tanto con el formulario estándar como con el registro a través de un proveedor social.',
      },
      {
        strong: 'Mi cuenta',
        text: 'Apartado de mi cuenta, donde podrás modificar dicha información o ampliar aquellos campos opcionales que voluntariamente consideres.',
      },
    ],
  },
  {
    id: 12,
    name: 'Cesión de datos a terceros',
    texts: [
      'Hogarfy no vende, alquila ni cede datos personales que puedan identificar al usuario, ni lo hará en un futuro, sin solicitar un consentimiento expreso previo.',
      'Para garantizar el correcto funcionamiento de la plataforma y realizar tareas adicionales, fundamentalmente relacionadas con el marketing online, es necesario que Hogarfy comparta datos con proveedores de servicios.',
    ],
    lists: [],
  },
  {
    id: 13,
    name: 'Modificaciones',
    texts: [
      'Hogarfy se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presente política de privacidad para adaptarla a los posibles cambios en la legislación, así como introducir cualquier mejora o aclaración que permita un mejor entendimiento de la misma.',
      'Como usuario de la web, eres responsable de consultar de forma periódica esta política, para poder estar al tanto de las novedades. Para facilitar esta tarea, al final del presente documento podrás encontrar la información relativa a la fecha de última actualización.',
    ],
    lists: [],
  },
];

export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de privacidad | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Main>
        <Title title='Política de privacidad' />

        {privacyPolicies.map((policy) => (
          <div className='mb-10' key={policy.id}>
            <Subtitle subtitle={policy.name} />
            {policy.texts.map((text, index) => (
              <p className='mb-5' key={index}>
                {text}
              </p>
            ))}
            <ul>
              {policy.lists.map((list, index) => (
                <li className='my-4 ml-12 list-disc' key={index}>
                  <StrongText text={list.strong} />
                  {list.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Main>
      <Footer />
    </>
  );
}
