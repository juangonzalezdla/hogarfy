import Header from '../../components/Header';
import Main from '../../components/Main';
import BreadcrumbPagination from '../../components/BreadcrumbPagination';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCategory } from '../../contexts/CategoryContext';
import { useProduct } from '../../contexts/ProductContext';
import ProductGrid from '../../components/ProductGrid';
import ProductCard from '../../components/ProductCard';

export default function ChildCategoryPage() {
  const { parentCategory, childCategory } = useParams();
  const { getCategories, categories } = useCategory();
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const normalizeString = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const parentCategoryData = categories.find(
    (category) =>
      !category.parent &&
      normalizeString(category.name) === normalizeString(parentCategory)
  );

  const childCategoryData = categories.find(
    (category) =>
      category.parent &&
      normalizeString(category.parent.name) ===
        normalizeString(parentCategory) &&
      normalizeString(category.name).replace(/\s+/g, '-') ===
        normalizeString(childCategory)
  );

  const filteredProducts = products.filter(
    (product) =>
      product.category && product.category._id === childCategoryData?._id
  );

  return (
    <>
      <Header />
      <section className='w-full max-w-[1400px] my-0 mx-auto py-3 px-12 flex flex-col max-md:px-4'>
        <BreadcrumbPagination />
      </section>
      <Main>
        <h1 className='text-2xl text-blue font-bold mb-20'>
          {childCategoryData?.name}
        </h1>

        {filteredProducts.length === 0 ? (
          <p>Esta categoría aún no tiene productos.</p>
        ) : (
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                url={`/${parentCategoryData?.name.toLowerCase()}/${childCategoryData?.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')}/product/${product._id}`}
                _id={product._id}
                name={product.name}
                brand={product.brand}
                images={product.images}
                price={product.price}
              />
            ))}
          </ProductGrid>
        )}
      </Main>
      <Footer />
    </>
  );
}
