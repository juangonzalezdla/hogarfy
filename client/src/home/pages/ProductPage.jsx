import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContext.jsx';
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext.jsx';
import { Button } from 'flowbite-react';
import formatPrice from '../../utils/formatPrice.js';

export default function ProductPage() {
  const { id } = useParams();
  const { getProduct, productData } = useProduct();
  const [activeImage, setActiveImage] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(id);
  }, []);

  useEffect(() => {
    // Verifica si activeImage es null antes de asignar la primera imagen
    if (!activeImage && productData?.images && productData.images.length > 0) {
      setActiveImage(productData.images[0].url);
    }
  }, [productData, activeImage]);

  const formattedPrice = formatPrice(productData?.price);

  return (
    <>
      <Header />

      <div className='m-5 ml-20 max-md:ml-4'>
        <Link
          to='/'
          className='w-40 bg-light-gray flex justify-center items-center gap-1 text-base text-dark-gray font-medium p-2 rounded-lg shadow-md'
        >
          <i className='bx bx-arrow-back md-sm'></i>
          Volver al inicio
        </Link>
      </div>

      <main className='w-full max-w-[1400px] my-0 mx-auto p-20 flex flex-col justify-center items-center max-md:px-4'>
        <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
          <div className='order-1 max-md:order-2'>
            <figure className='flex justify-center bg-light-gray p-5 rounded-lg'>
              <img className='w-56 h-56' src={activeImage} alt='Active image' />
            </figure>

            <div className='flex gap-3 flex-wrap mt-5'>
              {productData?.images.map((image, index) => (
                <div key={index} onClick={() => setActiveImage(image.url)}>
                  <img
                    src={image.url}
                    alt='Product image'
                    className='w-28 h-25 bg-light-gray p-3 rounded-lg cursor-pointer'
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='order-2 max-md:order-1'>
            <h1 className='text-black text-xl font-bold mb-5'>
              {productData?.name}
            </h1>
            <p className='text-black text-sm font-normal mb-5'>
              {productData?.description}
            </p>
            <p className='text-dark-gray text-lg font-bold'>{formattedPrice}</p>
            <Button
              onClick={() => addToCart(productData?._id)}
              size='sm'
              className='flex items-center justify-center mt-5'
            >
              Agregar
              <i className='bx bx-cart-add bx-sm'></i>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
