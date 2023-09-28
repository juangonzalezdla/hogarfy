function SearchBar() {
  return (
    <div className='w-[400px] max-w-full flex flex-row items-center'>
      <input 
        type="text" 
        placeholder="Buscar en Hogarfy"
        id='searcher' 
        className='w-full h-10 bg-blanco font-roboto text-base text-negro px-3 border-2 border-solid border-transparent rounded-l-lg focus:outline-none' 
      />
      <button 
        className='bg-gris-claro w-20 h-10 rounded-r-lg border-2 border-solid border-blanco flex justify-center items-center'
      >
        <i className='bx bx-search text-2xl text-azul font-bold'></i>
      </button>
    </div>
  )
};

export default SearchBar;