import { Modal, Button } from 'flowbite-react';
import { useCategory } from '../../context/CategoryContext';

export default function ModalDeleteCategory({ show, category, onClose }) {
  const { deleteCategory, getCategories } = useCategory();

  const handleDeleteCategory = async (category) => {
    await deleteCategory(category._id);
    onClose();
    getCategories();
  };

  return (
    <Modal onClose={onClose} show={show} size='md' popup>
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <i className='bx bx-info-circle bx-lg text-dark-gray'></i>
          <h3 className='mb-5 text-lg font-normal text-dark-gray'>
            ¿Estás seguro de que quieres eliminar la categoria {category.name}
          </h3>

          <div className='flex justify-center gap-4'>
            <Button
              onClick={() => {
                handleDeleteCategory(category);
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
