import { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ProductsTable from '../components/product/ProductsTable';

export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Productos';
  }, []);

  return (
    <>
      <DashboardLayout pageTitle='Productos'>
        <ProductsTable />
      </DashboardLayout>
    </>
  );
}
