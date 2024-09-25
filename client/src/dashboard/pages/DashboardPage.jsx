import { useEffect } from 'react';
import Layout from '../../ui/dashboard/Layout';

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
