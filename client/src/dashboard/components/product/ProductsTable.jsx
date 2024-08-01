import { Table, Spinner, Button, TextInput } from 'flowbite-react';
import ProductRow from './ProductRow';
import ModalCreateEditProduct from './ModalCreateEditProduct';
import ModalDeleteProduct from './ModalDeleteProduct';
import { useEffect, useState } from 'react';
import { useProduct } from '../../../contexts/ProductContext';
import { Toaster } from 'react-hot-toast';
import TablePagination from '../TablePagination';

export default function ProductsTable() {
  const { getProducts, products, loading } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const handleCreateEditModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

  const paginatedProducts = filteredProducts.slice(
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
          placeholder='Buscar producto...'
          value={searchTerm}
          onChange={handleSearch}
          className='w-80 max-sm:w-full'
        />

        <Button color='purple' onClick={() => handleCreateEditModal(null)}>
          Crear Products
        </Button>
      </div>
      {loading ? (
        <div className='flex justify-center items-center py-10'>
          <Spinner className='w-20 h-20' />
        </div>
      ) : (
        <>
          <Table>
            <Table.Head>
              <Table.HeadCell className='bg-light-gray'>Nombre</Table.HeadCell>
              <Table.HeadCell className='bg-light-gray'>Marca</Table.HeadCell>
              <Table.HeadCell className='bg-light-gray'>
                Categoría
              </Table.HeadCell>
              <Table.HeadCell className='bg-light-gray'>Price</Table.HeadCell>
              <Table.HeadCell className='bg-light-gray'>
                Acciones
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className='divide-y'>
              {paginatedProducts.map((product) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  onEdit={handleCreateEditModal}
                  onDelete={handleDeleteModal}
                />
              ))}
            </Table.Body>
          </Table>
          <TablePagination
            currentPage={currentPage}
            totalItems={filteredProducts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
      {showModal && (
        <ModalCreateEditProduct
          show={showModal}
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
      {showDeleteModal && (
        <ModalDeleteProduct
          show={showDeleteModal}
          product={selectedProduct}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
}
