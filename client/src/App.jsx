import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthContext';
import { UserProvider } from './account/context/UserContext';
import { CategoryProvider } from './dashboard/context/CategoryContext';
import { ProductProvider } from './dashboard/context/ProductContext';
import LogUpPage from './auth/pages/LogUpPage';
import LogInPage from './auth/pages/LogInPage';
import Home from './home/pages/Home';
import AccountPage from './account/pages/AccountPage';

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
    element: <AccountPage />,
    children: [
      {
        path: 'update-email',
      },
      {
        path: 'update-password',
      },
      {
        path: 'delete-account',
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
      },
      {
        path: 'terminos-condiciones',
      },
      {
        path: 'privacidad',
      },
    ]
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
