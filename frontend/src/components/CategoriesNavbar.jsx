import CategoryDropdown from './CategoryDropdown.jsx';

function CategoriesNavbar() {
  return (
    <div className='bg-blanco py-0 px-12'>
      <nav className='w-full max-w-[1400px] my-o mx-auto flex flex-row 
        items-center'>
        <CategoryDropdown />
      </nav>
    </div>
  )
};

export default CategoriesNavbar;