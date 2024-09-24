import { useEffect, useState } from 'react';
import { useProduct } from '../../../contexts/ProductContext';
import ProductCard from './ProductCard';
import Container from '../../Container';
import { Spinner } from 'flowbite-react';

export default function NewProducts() {
  const { getRecentProducts, products, loading } = useProduct();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [groupSize, setGroupSize] = useState(4);

  useEffect(() => {
    getRecentProducts();
  }, []);

  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth < 640) {
        setGroupSize(1);
      } else if (window.innerWidth < 768) {
        setGroupSize(2);
      } else if (window.innerWidth < 1024) {
        setGroupSize(3);
      } else {
        setGroupSize(4);
      }
    };

    updateGroupSize();
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
  }, []);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += groupSize) {
    groupedProducts.push(products.slice(i, i + groupSize));
  }

  const totalSlides = groupedProducts.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='bg-light-gray'>
      <Container>
        <h2 className='text-2xl text-blue font-bold mb-5'>Productos Nuevos</h2>
        {loading ? (
          <div className='flex justify-center items-center py-10'>
            <Spinner className='w-20 h-20' />
          </div>
        ) : (
          <div className='w-full relative'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {groupedProducts.map((group, index) => (
                  <div
                    key={index}
                    className='flex gap-4 justify-center w-full min-w-full'
                  >
                    {group.map((product) => (
                      <ProductCard
                        key={product._id}
                        url={`/parentCategory/childCategory/product/${product._id}`}
                        _id={product._id}
                        name={product.name}
                        brand={product.brand}
                        images={product.images}
                        price={product.price}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center bg-black bg-opacity-50 text-white p-2 rounded-full'
            >
              <i className='bx bx-chevron-left bx-sm'></i>
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center bg-black bg-opacity-50 text-white p-2 rounded-full'
            >
              <i className='bx bx-chevron-right bx-sm'></i>
            </button>

            <div className='flex justify-center mt-4'>
              {groupedProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
