import { useEffect } from 'react';
import Layout from '../components/Layout';
import ProductsTable from '../components/product/ProductsTable';

export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Productos';
  }, []);

  return (
    <>
      <Layout pageTitle='Productos'>
        <ProductsTable />
      </Layout>
    </>
  );
}
