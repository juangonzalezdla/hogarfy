import { useEffect } from 'react';
import Header from '../components/Header.jsx';

function OrdersPage() {
  useEffect(() => {
    document.title = 'Pedidos | Hogarfy';
  }, []);

  return (
    <>
      <Header />
      <div>OrdersPage</div>
    </>
  )
};

export default OrdersPage;