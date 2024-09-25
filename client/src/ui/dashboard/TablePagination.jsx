import { Pagination } from 'flowbite-react';

export default function TablePagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex =  totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <div>
        Mostrando {startIndex} a {endIndex} de {totalItems} elementos
      </div>
      <Pagination
        layout='navigation'
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        previousLabel='Anterior'
        nextLabel='Siguiente'
        showIcons
      />
    </div>
  );
}
