import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import CategoriesNavbar from '../components/categories/CategoriesNavbar.jsx';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Carousel } from 'flowbite-react';
import { useUser } from "../context/UserContext.jsx";

function HomePage() {
  useEffect(() => {
    document.title = 'Hogarfy ¡Compra tus necesidades!';
  }, []);

  const { isAuthenticated } = useAuth();

  const { getUser, userData } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated]);

  return (
    <div className='bg-azul-palido'>
      <Header />
      <CategoriesNavbar />
      {isAuthenticated ? (
        <div>HomePage {userData?.email}</div>
      ) : (
        <div>HomePage</div>
      )}
      <div className="w-full max-w-[1400px] my-0 mx-auto h-80 px-12">
        <Carousel>
          <img src="https://i.postimg.cc/RJN1j2GZ/imagen1.jpg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://i.postimg.cc/NKh8zJXQ/imagen4.jpg" alt="..." />
        </Carousel>
      </div>
      <Features />
      <Footer />
    </div>
  )
};

export default HomePage;