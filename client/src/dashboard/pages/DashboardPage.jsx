import DashboardLayout from '../components/DashboardLayout';
import BasicHeader from '../../components/BasicHeader';

export default function DashboardPage() {
  return (
    <>
      <BasicHeader />
      <DashboardLayout pageTitle='Dashboard' />
    </>
  );
}
