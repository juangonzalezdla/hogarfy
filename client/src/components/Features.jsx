const features = [
  {
    id: 1,
    name: 'Envío rápido',
    description: 'Nuestros envíos son rápidos y seguros.',
    icon: 'bx bxs-truck bx-lg text-blue group-hover:text-white',
  },
  {
    id: 2,
    name: 'Pago seguro',
    description: 'Pago seguro con tarjeta de crédito/Debíto.',
    icon: 'bx bxs-credit-card bx-lg text-blue group-hover:text-white',
  },
  {
    id: 3,
    name: 'Seguridad',
    description: 'Al comprar con nosotros tus datos estan 100% protegidos.',
    icon: 'bx bx-check-shield bx-lg text-blue group-hover:text-white',
  },
  {
    id: 4,
    name: 'Soporte 24/7',
    description: 'Soporte 24/7 para atenderte en cualquier momento.',
    icon: 'bx bx-support bx-lg text-blue group-hover:text-white',
  },
];

export default function Features() {
  return (
    <section className=' bg-light-blue py-12 px-12'>
      <div className='w-full max-w-[1400px] my-0 mx-auto flex flex-col justify-center items-center gap-10'>
        <h1 className='text-2xl text-center text-blue font-roboto font-bold mb-2'>
          En Hogarfy nos caracterizamos por
        </h1>

        <div className='flex justify-center items-center gap-5 max-lg:flex-col'>
          {features.map((feature) => (
            <article
              className='w-60 bg-white py-4 px-3 flex flex-col items-center rounded-lg shadow-lg transition-all duration-300 ease-in-out group hover:bg-blue'
              key={feature.id}
            >
              <i className={feature.icon}></i>
              <h2 className='text-black font-bold text-xl mt-1 group-hover:text-white'>
                {feature.name}
              </h2>
              <p className='text-center group-hover:text-white'>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
