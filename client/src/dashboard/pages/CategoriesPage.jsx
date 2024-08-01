import { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import CategoriesTable from '../components/category/CategoriesTable';

export default function CategoriesPage() {
  useEffect(() => {
    document.title = 'Categorías';
  }, []);

  return (
    <>
      <DashboardLayout pageTitle='Categorías'>
        <CategoriesTable />
      </DashboardLayout>
    </>
  );
}
