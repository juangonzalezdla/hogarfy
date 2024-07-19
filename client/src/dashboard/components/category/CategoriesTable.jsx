import { Table, Dropdown, Pagination, Spinner, Button, TextInput } from 'flowbite-react';
import ModalCreateEditCategory from './ModalCreateEditCategory';
import ModalDeleteCategory from './ModalDeleteCategory';
import { useEffect, useState } from 'react';
import { useCategory } from '../../context/CategoryContext';
import { Toaster } from 'react-hot-toast';

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

  const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(
    currentPage * ITEMS_PER_PAGE,
    filteredCategories.length
  );

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
              <Table.HeadCell className='bg-light-gray px-3'>Nombre</Table.HeadCell>
              <Table.HeadCell className='bg-light-gray px-3'>Categoría Padre</Table.HeadCell>
              <Table.HeadCell className='bg-light-gray px-3'>Acciones</Table.HeadCell>
            </Table.Head>

            <Table.Body className='divide-y'>
              {paginatedCategories.map((category) => (
                <Table.Row key={category._id} className='bg-white'>
                  <Table.Cell className='px-3 py-1.5'>{category.name}</Table.Cell>
                  <Table.Cell className='px-3 py-1.5'>
                    {category.parent?.name}
                  </Table.Cell>
                  <Table.Cell className='px-3 py-1.5'>
                    <Dropdown
                      renderTrigger={() => (
                        <i className='bx bx-dots-horizontal-rounded text-[25px] cursor-pointer p-2 rounded-full hover:text-dark-gray hover:bg-light-gray'></i>
                      )}
                      className='p-2 rounded-md'
                    >
                      <Dropdown.Item
                        className='text-sm font-medium rounded-md flex items-center gap-2'
                        onClick={() => handleCreateEditModal(category)}
                      >
                        <i className='bx bx-edit bx-sm'></i>
                        Editar
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className='text-sm text-red-700 font-medium rounded-md flex items-center gap-2'
                        onClick={() => handleDeleteModal(category)}
                      >
                        <i className='bx bxs-trash bx-sm'></i>
                        Eliminar
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div>
              Mostrando {startIndex} a {endIndex} de {filteredCategories.length} categorías
            </div>

            <Pagination
              layout='navigation'
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
              previousLabel='Anterior'
              nextLabel='Siguiente'
              showIcons
            />
          </div>
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
