import Header from '../../components/Header';
import CategoriesNavbar from '../../components/CategoriesNavbar';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import NewProducts from '../components/NewProducts';

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoriesNavbar />
      <FeaturedProducts />
      <NewProducts />
      <Features />
      <Footer />
    </>
  );
}
