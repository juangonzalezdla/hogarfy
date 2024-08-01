import { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';

export default function DashboardPage() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <>
      <DashboardLayout pageTitle='Dashboard' />
    </>
  );
}
