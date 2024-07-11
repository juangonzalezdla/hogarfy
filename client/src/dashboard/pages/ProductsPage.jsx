import DashboardLayout from '../components/DashboardLayout';
import BasicHeader from '../../components/BasicHeader';
import ModalCreateEditProduct from '../components/product/ModalCreateEditProduct';
import ProductsTable from '../components/product/ProductsTable';
import { Button } from 'flowbite-react';
import { useState } from 'react';

export default function ProductsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <BasicHeader />
      <DashboardLayout pageTitle='Productos'>
        <Button color='purple' onClick={() => handleOpenModal(null)}>
          Crear Producto
        </Button>

        <ProductsTable onEdit={handleOpenModal} />

        {showModal && (
          <ModalCreateEditProduct
            show={showModal}
            product={selectedProduct}
            onClose={() => setShowModal(false)}
          />
        )}
      </DashboardLayout>
    </>
  );
}
