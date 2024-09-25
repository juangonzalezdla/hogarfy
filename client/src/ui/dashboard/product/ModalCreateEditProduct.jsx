import { Modal } from 'flowbite-react';
import ProductForm from './ProductForm';
import { useEffect, useState } from 'react';
import { useProduct } from '../../../contexts/ProductContext';

export default function ModalCreateEditProduct({ show, product, onClose }) {
  const { createProduct, updateProduct, getProducts } = useProduct();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (product) setIsEdit(true);
    else setIsEdit(false);
  }, [product]);

  const onSubmit = async (data) => {
    data.images = data.images.map((image) => ({
      url: image.url,
      publicId: image.publicId,
    }));

    if (isEdit) await updateProduct(product._id, data);
    else await createProduct(data);

    onClose();
    getProducts();
  };

  return (
    <>
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
