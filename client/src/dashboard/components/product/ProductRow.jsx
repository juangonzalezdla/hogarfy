import { Table, Dropdown } from 'flowbite-react';
import formatPrice from '../../../utils/formatPrice';

export default function ProductRow({ product, onEdit, onDelete }) {
  return (
    <>
      <Table.Row className='bg-white'>
        <Table.Cell className='px-3 py-2'>{product.name}</Table.Cell>
        <Table.Cell className='px-3 py-2 max-md:hidden'>{product.brand}</Table.Cell>
        <Table.Cell className='px-3 py-2 max-md:hidden'>{product.category?.name}</Table.Cell>
        <Table.Cell className='px-3 py-2'>{formatPrice(product.price)}</Table.Cell>
        <Table.Cell className='px-3 py-2'>
          <Dropdown
            renderTrigger={() => (
              <i className='bx bx-dots-horizontal-rounded text-[25px] cursor-pointer p-2 rounded-full hover:text-dark-gray hover:bg-light-gray'></i>
            )}
            className='p-2 rounded-md'
          >
            <Dropdown.Item
              className='text-sm font-medium rounded-md flex items-center gap-2'
              onClick={() => onEdit(product)}
            >
              <i className='bx bx-edit bx-sm'></i>
              Edit
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className='text-sm text-red-700 font-medium rounded-md flex items-center gap-2'
              onClick={() => onDelete(product)}
            >
              <i className='bx bxs-trash bx-sm'></i>
              Eliminar
            </Dropdown.Item>
          </Dropdown>
        </Table.Cell>
      </Table.Row>
    </>
  );
}
