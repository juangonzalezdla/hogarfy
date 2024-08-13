import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function DashboardPage() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <>
      <Layout pageTitle='Dashboard' />
    </>
  );
}
