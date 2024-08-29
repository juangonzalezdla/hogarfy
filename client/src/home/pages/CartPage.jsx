import { useCart } from '../../contexts/CartContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartTable from '../components/CartTable';
import { Button } from 'flowbite-react';

export default function CartPage() {
  const { clearCart } = useCart();

  return (
    <div className='bg-light-gray'>
      <Header />
      <main className='w-full max-w-[1400px] my-0 mx-auto p-12 flex flex-col justify-center items-center max-md:px-4'>
        <div className='grid grid-cols-3 gap-5 w-full'>
          <section className='bg-white col-span-2 p-5 w-full h-auto shadow-md rounded-lg'>
            <div className='flex items-center justify-between mb-10'>
              <h2 className='text-dark text-xl font-bold flex items-center gap-1'>
                <i className='bx bx-cart bx-md'></i>
                Carrito
              </h2>

              <Button onClick={() => clearCart()} color='failure'>
                Vaciar
                <i className='bx bx-trash-alt bx-xs'></i>
              </Button>
            </div>

            <CartTable />
          </section>

          <section className='bg-white p-5 w-full h-96 shadow-md rounded-lg'>
            <h2 className='text-dark text-xl font-bold '>
              Información de envío
            </h2>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
