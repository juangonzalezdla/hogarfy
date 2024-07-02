import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthContext';
import { UserProvider } from './account/context/UserContext';
import { CategoryProvider } from './dashboard/context/CategoryContext';
import { ProductProvider } from './dashboard/context/ProductContext';

import LogUpPage from './auth/pages/LogUpPage';
import LogInPage from './auth/pages/LogInPage';
import Home from './home/pages/Home';

import AccountPage from './account/pages/AccountPage';
import UpdateEmailPage from './account/pages/UpdateEmailPage';
import UpdatePasswordPage from './account/pages/UpdatePasswordPage';
import DeleteAccountPage from './account/pages/DeleteAccountPage';

import FrequentQuestions from './legal/pages/FrequentQuestions';

const router = createBrowserRouter([
  {
    path: '/auth/',
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
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/orders',
  },
  {
    path: '/cart',
  },
  {
    path: '/account/:id/',
    children: [
      {
        path: 'my-account',
        element: <AccountPage />,
      },
      {
        path: 'update-email',
        element: <UpdateEmailPage />,
      },
      {
        path: 'update-password',
        element: <UpdatePasswordPage />,
      },
      {
        path: 'delete-account',
        element: <DeleteAccountPage />,
      },
    ],
  },
  {
    path: '/legal/',
    children: [
      {
        path: 'sobre-nosotros',
      },
      {
        path: 'preguntas-frecuentes',
        element: <FrequentQuestions />,
      },
      {
        path: 'terminos-condiciones',
      },
      {
        path: 'privacidad',
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CategoryProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </CategoryProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
