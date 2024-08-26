import { useEffect, useState } from 'react';
import { useCategory } from '../contexts/CategoryContext';
import { Link } from 'react-router-dom';

export default function CategoriesNavbar() {
  const { getCategories, categories } = useCategory();
  const [show, setShow] = useState(false);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const parentCategories = categories.filter(
    (categories) => !categories.parent
  );

  const handleCategoryClick = (categoryId) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
    } else {
      setExpandedCategoryId(categoryId);
    }
  };

  const replaceSpacesWithDashes = (str) => str.replace(/\s+/g, '-');

  return (
    <div className='bg-white py-0 px-12 w-full max-w-[1400px] my-o mx-auto max-md:px-4'>
      {show && (
        <div className='content-none fixed z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]'></div>
      )}

      <div className='md:hidden p-1'>
        <button
          onClick={() => setShow(true)}
          className='flex items-center text-dark-gray font-semibold rounded-lg p-1 hover:bg-light-gray'
        >
          <i className='bx bx-menu bx-md mr-1'></i>
          Categorías
        </button>
      </div>

      <aside
        className={
          (show
            ? ''
            : 'transition-transform -translate-x-full md:translate-x-0') +
          ' h-full w-2/3 bg-white fixed top-0 left-0 z-10 overflow-x-hidden p-4 md:static md:h-auto md:p-0'
        }
      >
        <nav className='w-full flex items-start gap-3 max-md:flex-col'>
          {show && (
            <div className='flex ml-auto'>
              <button
                onClick={() => setShow(false)}
                className='text-dark-gray hover:bg-light-gray rounded-lg p-1.5 flex items-center'
              >
                <i className='bx bx-x bx-sm'></i>
              </button>
            </div>
          )}

          {parentCategories.map((parentCategory) => (
            <div key={parentCategory._id} className='w-full md:w-auto'>
              <button
                onClick={() => handleCategoryClick(parentCategory._id)}
                className='w-full bg-white text-blue text-base font-roboto border-none font-bold outline-none p-2.5 flex items-center hover:bg-light-gray'
              >
                {parentCategory.name}
                <i className='bx bx-chevron-down bx-sm'></i>
              </button>

              {expandedCategoryId === parentCategory._id && (
                <div className='bg-light-blue rounded-b-md md:w-52'>
                  {parentCategory.children.map((childCategory) => (
                    <Link
                      key={childCategory._id}
                      className='block font-roboto text-dark text-sm p-2.5 no-underline font-bold text-left hover:bg-light-gray'
                      to={`/${parentCategory.name.toLowerCase()}/${replaceSpacesWithDashes(
                        childCategory.name.toLowerCase()
                      )}`}
                    >
                      {childCategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
