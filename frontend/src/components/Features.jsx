import FeaturesCard from './FeaturesCard.jsx';

function Features() {
  return (
    <section className='w-full max-w-[1400px] my-14 mx-[auto] 
      flex flex-row justify-center items-center gap-10'>
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
          <i class='bx bxs-credit-card text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>

        <FeaturesCard
          name='Seguridad'
          description='Al comprar con nosotros tus datos estan 100% protegidos'
        >
          <i class='bx bx-check-shield text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>

        <FeaturesCard
          name='Soporte 24/7'
          description='Soporte 24/7 para atenderte en cualquier momento.'
        >
          <i class='bx bx-support text-azul text-5xl group-hover:text-blanco'></i>
        </FeaturesCard>
    </section>
  )
}

export default Features;