import { Table, Dropdown } from 'flowbite-react';

export default function CategoryRow({ category, onEdit, onDelete }) {
  return (
    <>
      <Table.Row key={category._id} className='bg-white'>
        <Table.Cell className='px-3 py-1.5'>{category.name}</Table.Cell>
        <Table.Cell className='px-3 py-1.5'>{category.parent?.name}</Table.Cell>
        <Table.Cell className='px-3 py-1.5'>
          <Dropdown
            renderTrigger={() => (
              <i className='bx bx-dots-horizontal-rounded text-[25px] cursor-pointer p-2 rounded-full hover:text-dark-gray hover:bg-light-gray'></i>
            )}
            className='p-2 rounded-md'
          >
            <Dropdown.Item
              className='text-sm font-medium rounded-md flex items-center gap-2'
              onClick={() => onEdit(category)}
            >
              <i className='bx bx-edit bx-sm'></i>
              Editar
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className='text-sm text-red-700 font-medium rounded-md flex items-center gap-2'
              onClick={() => onDelete(category)}
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
