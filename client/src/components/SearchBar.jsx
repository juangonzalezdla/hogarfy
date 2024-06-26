export default function SearchBar() {
  return (
    <div className='w-96 max-w-full flex flex-row items-center'>
      <input
        type='text'
        placeholder='Buscar en Hogarfy'
        className='w-full h-10 bg-white font-roboto text-base text-black px-3 border-none rounded-l-lg'
      />
      <button className='bg-light-gray w-20 h-10 rounded-r-lg flex justify-center items-center'>
        <i className='bx bx-search bx-sm text-blue font-bold'></i>
      </button>
    </div>
  );
}
