import { useEffect } from 'react';
import Layout from '../../ui/dashboard/Layout';
import ProductsTable from '../../ui/dashboard/product/ProductsTable';

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
