import FeaturesCard from './FeaturesCard.jsx';

function Features() {
  return (
    <section className='w-full max-w-[1400px] my-0 mx-auto py-12 px-12 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-2xl text-center text-azul font-roboto font-bold mb-2'>
        En Hogarfy nos caracterizamos por
      </h1>

      <div className='flex justify-center items-center gap-5 max-lg:flex-col'>
        <FeaturesCard 
          name='Envío rápido' 
          description='Nuestros envíos son rápidos y seguros.'
        >
          <i className='bx bxs-truck text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>

        <FeaturesCard
          name='Pago seguro'
          description='Pago seguro con tarjeta de crédito/Debíto.'
        >
          <i className='bx bxs-credit-card text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>

        <FeaturesCard
          name='Seguridad'
          description='Al comprar con nosotros tus datos estan 100% protegidos'
        >
          <i className='bx bx-check-shield text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>

        <FeaturesCard
          name='Soporte 24/7'
          description='Soporte 24/7 para atenderte en cualquier momento.'
        >
          <i className='bx bx-support text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>
      </div>
    </section>
  )
};

export default Features;