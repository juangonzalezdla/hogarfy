import { Modal, Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useProduct } from '../../context/ProductContext';
import ProductForm from './ProductForm';

export default function ModalCreateEditProduct({ show, product, onClose }) {
  const { createProduct, updateProduct } = useProduct();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (product) setIsEdit(true);
    else setIsEdit(false);
  }, [product]);

  const onSubmit = async (data) => {
    if (isEdit) {
      data.images = data.images.map((image) => image.url);
      await updateProduct(product._id, data);
    } else {
      data.images = data.images.map((image) => image.url);
      await createProduct(data);
    }
    onClose();
  };

  return (
    <>
      <Toaster />
      <Modal show={show} size='2xl' onClose={onClose}>
        <Modal.Header>
          {isEdit
            ? `Editar producto ${product.name}`
            : 'Crear un nuevo producto'}
        </Modal.Header>

        <Modal.Body>
          <ProductForm onSubmit={onSubmit} product={product} />
        </Modal.Body>
      </Modal>
    </>
  );
}
