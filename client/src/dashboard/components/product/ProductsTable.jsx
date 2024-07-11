import { Table } from 'flowbite-react';
import ProductRow from './ProductRow';
import { useEffect } from 'react';
import { useProduct } from '../../context/ProductContext';

export default function ProductsTable({ onEdit }) {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    document.title = 'Productos';
    getProducts();
  }, []);

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell className='bg-light-gray'>Nombre</Table.HeadCell>
          <Table.HeadCell className='bg-light-gray'>Marca</Table.HeadCell>
          <Table.HeadCell className='bg-light-gray'>Categoría</Table.HeadCell>
          <Table.HeadCell className='bg-light-gray'>Price</Table.HeadCell>
          <Table.HeadCell className='bg-light-gray'>Acciones</Table.HeadCell>
        </Table.Head>

        <Table.Body className='divide-y'>
          {products.map((product) => (
            <ProductRow key={product._id} product={product} onEdit={onEdit} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
