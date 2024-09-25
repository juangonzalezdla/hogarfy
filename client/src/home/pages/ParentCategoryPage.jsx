import Header from '../../ui/Header';
import Container from '../../ui/Container';
import BreadcrumbPagination from '../../ui/BreadcrumbPagination';
import Footer from '../../ui/Footer';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCategory } from '../../contexts/CategoryContext';
import normalizeString from '../../utils/normalizeString';

export default function ParentCategoryPage() {
  const { parentCategory } = useParams();
  const { getCategories, categories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  const parentCategoryData = categories.find(
    (category) =>
      !category.parent &&
      normalizeString(category.name) === normalizeString(parentCategory)
  );

  return (
    <div className='bg-light-blue'>
      <Header />
      <section className='w-full max-w-[1400px] my-0 mx-auto py-3 px-12 flex flex-col max-md:px-4'>
        <BreadcrumbPagination />
      </section>
      <Container>
        <h1 className='text-2xl text-blue font-semibold font-roboto mb-10'>
          {parentCategoryData?.name} - Categorias hijas
        </h1>

        <section className='flex justify-center items-center flex-wrap gap-5'>
          {parentCategoryData?.children.map((childCategory) => (
            <Link
              key={childCategory._id}
              to={`/${parentCategoryData.name.toLowerCase()}/${childCategory.name
                .toLowerCase()
                .replace(/\s+/g, '-')}`}
            >
              <article className='w-auto bg-white text-2xl text-blue font-bold px-10 py-20 rounded-xl shadow-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
                {childCategory.name}
              </article>
            </Link>
          ))}
        </section>
      </Container>
      <Footer />
    </div>
  );
}
