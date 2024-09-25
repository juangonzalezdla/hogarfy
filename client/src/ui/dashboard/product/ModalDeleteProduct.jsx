import { Modal, Button } from 'flowbite-react';
import { useProduct } from '../../../contexts/ProductContext';

export default function ModalDeleteProduct({ show, product, onClose }) {
  const { deleteProduct, getProducts } = useProduct();

  const handleDeleteProduct = async (product) => {
    await deleteProduct(product._id);
    onClose();
    getProducts();
  };

  return (
    <Modal onClose={onClose} show={show} size='md' popup>
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <i className='bx bx-info-circle bx-lg text-dark-gray'></i>
          <h3 className='mb-5 text-lg font-normal text-dark-gray'>
            ¿Estás seguro de que quieres eliminar el producto {product.name}
          </h3>

          <div className='flex justify-center gap-4'>
            <Button
              onClick={() => {
                handleDeleteProduct(product);
                onClose();
              }}
              color='failure'
            >
              Si, Estoy seguro
            </Button>
            <Button onClick={onClose} color='gray'>
              No, cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
