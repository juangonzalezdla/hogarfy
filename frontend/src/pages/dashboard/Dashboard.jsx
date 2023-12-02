import { useEffect } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import DashboardLayout from './DashboardLayout.jsx';

function Dashboard() {
  const { getUser, userData } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <DashboardLayout>
      <div>hola admin, {userData?.email}</div>

    </DashboardLayout>
  )
};

export default Dashboard;