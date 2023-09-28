import CategoryDropdown from './CategoryDropdown.jsx';

function CategoriesNavbar() {
  return (
    <div className='bg-blanco py-0 px-12 max-md:px-4'>
      <nav className='w-full max-w-[1400px] my-o mx-auto flex items-center z-10'>
        <CategoryDropdown />
      </nav>
    </div>
  )
};

export default CategoriesNavbar;