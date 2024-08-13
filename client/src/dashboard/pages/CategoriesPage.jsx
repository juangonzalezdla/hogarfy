import { useEffect } from 'react';
import Layout from '../components/Layout';
import CategoriesTable from '../components/category/CategoriesTable';

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
