import { useEffect } from 'react';
import { useCategory } from '../contexts/CategoryContext';
import { Link } from 'react-router-dom';

export default function CategoriesNavbar() {
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  const parentCategories = categories.filter(
    (categories) => !categories.parent
  );

  const replaceSpacesWithDashes = (str) => str.replace(/\s+/g, '-');

  return (
    <div className='bg-white py-0 px-12 max-md:px-4'>
      <nav className='w-full max-w-[1400px] my-o mx-auto flex items-center z-10'>
        {parentCategories.map((parentCategory) => (
          <div key={parentCategory._id} className='group relative'>
            <button className='bg-white text-blue text-base font-roboto border-none font-bold outline-none p-2.5 flex justify-center items-center group-hover:bg-light-gray'>
              {parentCategory.name}
            </button>

            <div className='bg-white hidden absolute w-52 shadow-lg z-10 group-hover:block rounded-b-md'>
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
          </div>
        ))}
      </nav>
    </div>
  );
}
