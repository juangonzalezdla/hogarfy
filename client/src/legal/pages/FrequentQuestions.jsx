import { useEffect } from 'react';
import BasicHeader from '../../ui/BasicHeader';
import Main from '../../ui/legal/Main';
import Title from '../../ui/legal/Title';
import Subtitle from '../../ui/legal/Subtitle';
import Footer from '../../ui/Footer';

const questions = [
  {
    id: 1,
    name: '¿Qué productos están disponibles y qué productos no?',
    responses: [
      'En nuestra plataforma todo producto visible tendra disponibilidad para ser comprado, si un producto esta a punto de agotarse el producto tendrá su aviso sobre el numero disponible e igualmente aparecerán los productos que están agotados y cuanto tiempo tardaran en surtirse las bodegas.',
    ],
  },
  {
    id: 2,
    name: '¿En cuánto tiempo tendré listo mi producto?',
    responses: [
      'Una vez se haya confirmado el pago en Hogarfy haremos el despacho del producto mediante nuestras transportadoras aliadas, Dependiendo de la zona donde se encuentre ubicado nuestro cliente puede tardar de 3 a 5 días.',
    ],
  },
  {
    id: 3,
    name: '¿Los productos tienen garantía?',
    responses: [
      'Todos nuestros productos tienen garantías y se le puede hacer un reembolso al usuario o un cambio de articulo.',
    ],
  },
  {
    id: 4,
    name: '¿En la plataforma mis datos estan protegidos?',
    responses: [
      'Sí, en Hogarfy respetamos 100% tu derecho a la protección de datos, por esta razón, utilizamos los más altos niveles de seguridad para proteger tanto tus datos personales como los de tus pagos.',
      'Por favor, no compartas tu usuario ni la contraseña que te identifican en nuestro sitio web, pues son el acceso a tu cuenta y a toda tu información personal.',
    ],
  },
  { id: 5, name: '¿Qué metodos de pago hay?', responses: [] },
  {
    id: 6,
    name: '¿Qué datos se registran en la factura?',
    responses: [
      'Todos los datos que registraremos en tu factura, serán los datos registrados como el titular de tu cuenta de Hogarfy. Recuerda que puedes verificar la información directamente desde tu perfil.',
      'Una vez registrada tu compra no podemos modificar los datos de la factura, esto en cumplimiento del Decreto 3327 de 2009.',
    ],
  },
  {
    id: 7,
    name: 'Reembolsos',
    responses: [
      'Después de un proceso de solicitud de devolución o una cancelación por cualquier razón válida, iniciaremos el proceso de reembolso según la forma de pago que elegiste o a través de un cupón.',
    ],
  },
  {
    id: 8,
    name: 'Devoluciones',
    responses: [
      'Si no estás satisfecho con tu producto, puedes devolverlo completamente gratis dentro de los 7 días naturales',
    ],
  },
];

export default function FrequentQuestions() {
  useEffect(() => {
    document.title = 'Preguntas frecuentes | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Main>
        <Title title='Preguntas frecuentes' />

        {questions.map((question) => (
          <div key={question.id} className='mb-10'>
            <Subtitle subtitle={question.name} />
            {question.responses.map((response, index) => (
              <p key={index} className='mb-5'>
                {response}
              </p>
            ))}
          </div>
        ))}
      </Main>
      <Footer />
    </>
  );
}
