import { useEffect } from 'react';
import Layout from '../../ui/dashboard/Layout';
import CategoriesTable from '../../ui/dashboard/category/CategoriesTable';

export default function CategoriesPage() {
  useEffect(() => {
    document.title = 'Categorías';
  }, []);

  return (
    <>
      <Layout pageTitle='Categorías'>
        <CategoriesTable />
      </Layout>
    </>
  );
}
