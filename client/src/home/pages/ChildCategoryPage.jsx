import Header from '../../ui/Header';
import Container from '../../ui/Container';
import BreadcrumbPagination from '../../ui/BreadcrumbPagination';
import Footer from '../../ui/Footer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategory } from '../../contexts/CategoryContext';
import { useProduct } from '../../contexts/ProductContext';
import ProductGrid from '../../ui/home/product/ProductGrid';
import ProductCard from '../../ui/home/product/ProductCard';
import normalizeString from '../../utils/normalizeString';

export default function ChildCategoryPage() {
  const { parentCategory, childCategory } = useParams();
  const { getCategories, categories } = useCategory();
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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
    <div className='bg-light-blue'>
      <Header />
      <section className='w-full max-w-[1400px] my-0 mx-auto py-3 px-12 flex flex-col max-md:px-4'>
        <BreadcrumbPagination />
      </section>
      <Container>
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
      </Container>
      <Footer />
    </div>
  );
}
