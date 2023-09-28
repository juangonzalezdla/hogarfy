import { useEffect } from 'react';
import Header from '../components/Header.jsx';

function CartPage() {
  useEffect(() => {
    document.title = 'Carrito | Hogarfy';
  }, []);

  return (
    <>
      <Header />
      <div>CartPage</div>
    </>
  )
};

export default CartPage;