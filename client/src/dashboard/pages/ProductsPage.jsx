import DashboardLayout from '../components/DashboardLayout';
import ProductsTable from '../components/product/ProductsTable';

export default function ProductsPage() {
  return (
    <>
      <DashboardLayout pageTitle='Productos'>
        <ProductsTable />
      </DashboardLayout>
    </>
  );
}
