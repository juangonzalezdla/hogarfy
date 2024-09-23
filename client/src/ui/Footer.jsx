import { Link } from 'react-router-dom';
import Logo from './Logo';

const legalInformation = [
  { id: 1, name: '¿Quiénes somos?', href: '/legal/nosotros' },
  { id: 2, name: 'Preguntas frecuentes', href: '/legal/preguntas' },
  { id: 3, name: 'Términos y condiciones', href: '/legal/terminos' },
  { id: 4, name: 'Política de privacidad', href: '/legal/privacidad' },
];

const social = [
  {
    id: 1,
    icon: 'bx bxl-facebook-circle bx-sm text-black group-hover:text-white',
    href: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'bx bxl-instagram bx-sm text-black group-hover:text-white',
    href: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'bx bxl-twitter bx-sm text-black group-hover:text-white',
    href: 'https://www.twitter.com/',
  },
];

export default function Footer() {
  return (
    <footer className='bg-dark text-white px-12 py-12 max-md:px-4'>
      <div className='w-full max-w-[1400px] my-0 mx-auto flex justify-between max-md:flex-col max-md:gap-8'>
        <section className='flex flex-col justify-center items-center'>
          <Logo />
          <span className='text-center'>© Copyright 2023, Hogarfy colombia SAS</span>
        </section>

        <section className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold mb-2'>Informacíon</h2>
          {legalInformation.map((information) => (
            <Link
              to={information.href}
              className='mb-1 hover:underline'
              target='_blank'
              key={information.id}
            >
              {information.name}
            </Link>
          ))}
        </section>

        <section className='flex flex-col items-center gap-2'>
          <h2 className='text-2xl font-bold mb-2'>Siguenos</h2>
          <div className='flex items-center gap-5'>
            {social.map((social) => (
              <a
                href={social.href}
                className='bg-white p-1.5 flex items-center rounded-lg border-2 border-solid border-white group hover:bg-dark'
                target='_blank'
                key={social.id}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
