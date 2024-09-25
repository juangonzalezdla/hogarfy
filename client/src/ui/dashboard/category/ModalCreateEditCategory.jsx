import { Modal } from 'flowbite-react';
import CategoryForm from './CategoryForm';
import { useEffect, useState } from 'react';
import { useCategory } from '../../../contexts/CategoryContext';

export default function ModalCreateEditCategory({ show, category, onClose }) {
  const { createCategory, updateCategory, getCategories } = useCategory();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (category) setIsEdit(true);
    else setIsEdit(false);
  }, [category]);

  const onSubmit = async (data) => {
    data.properties = data.properties.map((prop) => ({
      name: prop.name,
      values: prop.values.split(',').map((value) => value.trim()),
    }));

    if (data.parentId === '') data.parentId = null;

    if (isEdit) await updateCategory(category._id, data);
    else await createCategory(data);

    onClose();
    getCategories();
  };

  return (
    <Modal show={show} size='2xl' onClose={onClose}>
      <Modal.Header>
        {isEdit
          ? `Editar categoría ${category.name}`
          : 'Crear una nueva categoría'}
      </Modal.Header>

      <Modal.Body>
        <CategoryForm onSubmit={onSubmit} category={category} />
      </Modal.Body>
    </Modal>
  );
}
