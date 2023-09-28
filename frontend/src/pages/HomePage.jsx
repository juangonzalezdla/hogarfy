import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import CategoriesNavbar from '../components/categories/CategoriesNavbar.jsx';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

function HomePage() {
  useEffect(() => {
    document.title = 'Hogarfy ¡Compra tus necesidades!';
  }, []);

  const { user, isAuthenticated } = useAuth();

  return (
    <div className='bg-azul-palido'>
      <Header />
      <CategoriesNavbar />
      {isAuthenticated ? (
        <div>HomePage {user.email}</div>
      ) : (
        <div>HomePage</div>
      )}
      <Features />
      <Footer />
    </div>
  )
};

export default HomePage;