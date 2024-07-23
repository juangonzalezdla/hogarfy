import { Table, Spinner, Button, TextInput } from 'flowbite-react';
import CategoryRow from './CategoryRow';
import ModalCreateEditCategory from './ModalCreateEditCategory';
import ModalDeleteCategory from './ModalDeleteCategory';
import { useEffect, useState } from 'react';
import { useCategory } from '../../context/CategoryContext';
import { Toaster } from 'react-hot-toast';
import TablePagination from '../TablePagination';

export default function CategoriesTable() {
  const { getCategories, categories, loading } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    document.title = 'Productos';
    getCategories();
  }, []);

  const handleCreateEditModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleDeleteModal = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setFilteredCategories(
      categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [categories, searchTerm]);

  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Toaster />
      <div className='flex justify-between items-center mb-4 max-sm:flex-col-reverse max-sm:items-start max-sm:gap-4 max-sm:justify-start'>
        <TextInput
          type='text'
          placeholder='Buscar categoría...'
          value={searchTerm}
          onChange={handleSearch}
          className='w-80 max-sm:w-full'
        />

        <Button color='purple' onClick={() => handleCreateEditModal(null)}>
          Crear Categoría
        </Button>
      </div>
      {loading ? (
        <div className='flex justify-center items-center py-10'>
          <Spinner className='w-20 h-20' />
        </div>
      ) : (
        <>
          <Table className='max-w-full'>
            <Table.Head>
              <Table.HeadCell className='bg-light-gray px-3'>
                Nombre
              </Table.HeadCell>
              <Table.HeadCell className='bg-light-gray px-3'>
                Categoría Padre
              </Table.HeadCell>
              <Table.HeadCell className='bg-light-gray px-3'>
                Acciones
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className='divide-y'>
              {paginatedCategories.map((category) => (
                <CategoryRow
                  key={category._id}
                  category={category}
                  onEdit={handleCreateEditModal}
                  onDelete={handleDeleteModal}
                />
              ))}
            </Table.Body>
          </Table>
          <TablePagination
            currentPage={currentPage}
            totalItems={filteredCategories.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
      {showModal && (
        <ModalCreateEditCategory
          show={showModal}
          category={selectedCategory}
          onClose={() => setShowModal(false)}
        />
      )}
      {showDeleteModal && (
        <ModalDeleteCategory
          show={showDeleteModal}
          category={selectedCategory}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
}
