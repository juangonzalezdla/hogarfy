import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LogUpPage from './auth/pages/LogUpPage';
import LogInPage from './auth/pages/LogInPage';

const router = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'logup',
        element: <LogUpPage />,
      },
      {
        path: 'login',
        element: <LogInPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
