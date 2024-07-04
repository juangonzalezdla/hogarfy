import { useEffect } from 'react';
import BasicHeader from '../../components/BasicHeader';
import Main from '../components/Main';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import StrongText from '../components/StrongText';
import Footer from '../../components/Footer';

const terms = [
  {
    id: 1,
    name: '',
    texts: [
      'El presente contrato describe los términos y condiciones aplicables al uso del contenido, productos y/o servicios del sitio web hogarfy del cual es titular Juan David Gonzalez, Luis Pastrana (Empresa Ideal Software). Para hacer uso del contenido de productos y/o servicios del sitio web el usuario deberá sujetarse a los presentes términos y condiciones.',
    ],
    lists: [],
  },
  {
    id: 2,
    name: 'Objeto',
    texts: [
      'El objeto es regular el acceso y la utilización del contenido productos y/o servicios a disposición del público general en el dominio, hogarfy.com',
    ],
    lists: [
      'El titular se reserva el derecho de realizar cualquier tipo de modificación en el sitio web en cualquier momento y sin previo aviso, el usuario acepta dichas condiciones.',
      'El acceso al sitio web por parte del usuario es libre y gratuito, la utilización del contenido, productos.',
      'El sitio web sólo admite el acceso a personas mayores de edad y no se hace responsable por el incumplimiento de esto.',
      'El sitio web está dirigido a usuarios residentes de colombia y cumple con la legislación establecida en dicho país si el usuario reside en otro país accede al sitio podrá observar los productos pero no podrá hacer envíos a su lugar de residencia.',
      'La administración del sitio web puede ejercerse por terceros es decir que personas distintas al titular sin afectar los presentes términos y condiciones.',
    ],
  },
  {
    id: 3,
    name: 'Usuario',
    texts: [
      'Las actividades del usuario en el sitio web como ver las publicaciones de los productos o escribir reseñas sobre ellos estará sujeta a los presentes términos y condiciones. El usuario se compromete a utilizar el contenido, productos y/o servicios de forma lícita sin faltar a la moral o al orden público, absteniéndose de realizar cualquier acto que afecte a los derechos de terceros o del funcionamiento del sitio web.',
      'El usuario se compromete a promocionar información verídica en los formularios del sitio web.',
      'El acceso al sitio web no supone una relación entre el usuario y el titular del sitio web. El usuario manifiesta ser mayor de edad y contar con la capacidad jurídica de acatar los presentes términos y condiciones.',
    ],
    lists: [],
  },
  {
    id: 4,
    name: 'Acceso y navegación en el sitio web',
    texts: [
      'El titular no garantiza la continuidad y disponibilidad del contenido, productos y/o servicios en el sitio web, realizará acciones que fomenten el buen funcionamiento de dicho sitio web sin responsabilidad alguna.',
      'El titular no se responsabiliza que el software esté libre de errores que puedan causar daño a la página web de una u otra forma nuestro equipo estará trabajando lo más pronto posible para solucionar el error.',
    ],
    lists: [],
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = 'Términos y condiciones | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Main>
        <Title title='Términos y condiciones' />

        {terms.map((term) => (
          <div className='mb-10' key={term.id}>
            <Subtitle subtitle={term.name} />
            {term.texts.map((text, index) => (
              <p className='mb-5' key={index}>
                {text}
              </p>
            ))}
            <ul>
              {term.lists.map((list, index) => (
                <li className='my-4 ml-12 list-disc' key={index}>
                  {list}
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
