import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import FeaturesCard from '../components/FeaturesCard.jsx';

function HomePage() {
  return (
    <div className='bg-azul-palido'>
      <Header />
      <div>HomePage</div>
      <Features />
      <Footer />
    </div>
    
  )
}

export default HomePage;