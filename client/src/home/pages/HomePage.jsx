import Header from '../../ui/Header';
import CategoriesNavbar from '../../components/CategoriesNavbar';
import Features from '../../ui/home/Features';
import Footer from '../../ui/Footer';
import FeaturedProducts from '../../ui/home/product/FeaturedProducts';
import NewProducts from '../../ui/home/product/NewProducts';

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
