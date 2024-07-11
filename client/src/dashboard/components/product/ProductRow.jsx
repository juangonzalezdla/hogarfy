import { Table, Dropdown } from 'flowbite-react';
import { useProduct } from '../../context/ProductContext';
import { Toaster } from 'react-hot-toast';

export default function ProductRow({ product, onEdit }) {
  const { deleteProduct } = useProduct();

  const handleDeleteProduct = async (product) => {
    await deleteProduct(product._id);
  };

  return (
    <Table.Row className='bg-white'>
      <Toaster />
      <Table.Cell className='font-medium text-gray-900'>
        {product.name}
      </Table.Cell>
      <Table.Cell>{product.brand}</Table.Cell>
      <Table.Cell>{product.category?.name}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
      <Table.Cell>
        <Dropdown
          renderTrigger={() => (
            <i className='bx bx-dots-horizontal-rounded text-[25px] cursor-pointer p-2 rounded-full hover:text-dark-gray hover:bg-light-gray'></i>
          )}
          className='p-2 rounded-md'
        >
          <Dropdown.Item
            className='text-base font-medium rounded-md flex items-center gap-2'
            onClick={() => onEdit(product)}
          >
            <i className='bx bx-edit bx-sm'></i>
            Edit
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className='text-base text-red-700 font-medium rounded-md flex items-center gap-2'
            onClick={() => handleDeleteProduct(product)}
          >
            <i className='bx bxs-trash bx-sm'></i>
            Eliminar
          </Dropdown.Item>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  );
}
