import DashboardLayout from '../components/DashboardLayout';
import BasicHeader from '../../components/BasicHeader';


import ModalCreateProduct from '../components/ModalCreateProduct';
import ProductsTable from '../components/ProductsTable';



export default function ProductsPage() {
  return (
    <>
      <BasicHeader />
      <DashboardLayout pageTitle='Productos'>
        <ModalCreateProduct show='true' />
        <ProductsTable />
      </DashboardLayout>
    </>
  );
}
