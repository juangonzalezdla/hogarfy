import DashboardLayout from '../components/DashboardLayout';
import CategoriesTable from '../components/category/CategoriesTable';

export default function CategoriesPage() {
  return (
    <>
      <DashboardLayout pageTitle='Categorías'>
        <CategoriesTable />
      </DashboardLayout>
    </>
  );
}
