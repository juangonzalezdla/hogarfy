import { Button, Tooltip } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ _id, name, brand, images, price, url }) {
  const { addToCart } = useCart();

  function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  }

  const formattedPrice = formatPrice(price);

  return (
    <div className='max-w-[250px] bg-white p-3 font-poppins rounded-md shadow-lg max-lg:px-4'>
      <Link to={url}>
        <figure className='w-full flex justify-center'>
          <img className='w-40 h-40' src={images[0].url} alt='' />
        </figure>
      </Link>

      <div className='w-full'>
        <span className='text-sm tracking-widest text-dark-gray my-2 uppercase'>
          {brand}
        </span>
        <Tooltip content={name} animation='duration-300' className='text-xs'>
          <Link to={url}>
            <h2 className='text-black font-medium text-sm mb-2 tracking-tight line-clamp-2 hover:underline'>
              {name}
            </h2>
          </Link>
        </Tooltip>

        <div className='flex justify-between items-center gap-2 mt-5'>
          <p className='text-black text-base font-semibold'>{formattedPrice}</p>
          <Button
            onClick={() => addToCart(_id)}
            size='sm'
            className='flex items-center justify-center'
          >
            Agregar
            <i className='bx bx-cart-add bx-sm'></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
