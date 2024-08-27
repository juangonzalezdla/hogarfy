import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

import LogUpPage from './auth/pages/LogUpPage';
import LogInPage from './auth/pages/LogInPage';
import HomePage from './home/pages/HomePage';
import OrdersPage from './home/pages/OrdersPage';
import CartPage from './home/pages/CartPage';
import ParentCategoryPage from './home/pages/ParentCategoryPage';
import ChildCategoryPage from './home/pages/ChildCategoryPage';
import ProductPage from './home/pages/ProductPage';

import AccountPage from './account/pages/AccountPage';
import UpdateEmailPage from './account/pages/UpdateEmailPage';
import UpdatePasswordPage from './account/pages/UpdatePasswordPage';
import DeleteAccountPage from './account/pages/DeleteAccountPage';

import AboutUs from './legal/pages/AboutUs';
import FrequentQuestions from './legal/pages/FrequentQuestions';
import Terms from './legal/pages/Terms';
import Privacy from './legal/pages/Privacy';

import DashboardPage from './dashboard/pages/DashboardPage';
import ProductsPage from './dashboard/pages/ProductsPage';
import CategoriesPage from './dashboard/pages/CategoriesPage';

import UnauthorizedPage from './home/pages/UnauthorizedPage';
import ProtectedRoute from './ProtectedRoute';

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
    element: <HomePage />,
  },
  {
    path: '/orders',
    element: <OrdersPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/:parentCategory',
    element: <ParentCategoryPage />,
  },
  {
    path: '/:parentCategory/:childCategory',
    element: <ChildCategoryPage />,
  },
  {
    path: '/:parentCategory/:childCategory/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/legal/',
    children: [
      {
        path: 'sobre-nosotros',
        element: <AboutUs />,
      },
      {
        path: 'preguntas-frecuentes',
        element: <FrequentQuestions />,
      },
      {
        path: 'terminos-condiciones',
        element: <Terms />,
      },
      {
        path: 'privacidad',
        element: <Privacy />,
      },
    ],
  },
  {
    path: '/account/:id/',
    element: <ProtectedRoute />,
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
    path: '/dashboard/',
    element: <ProtectedRoute adminOnly={true} />,
    children: [
      {
        path: 'home',
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
    ],
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CategoryProvider>
          <ProductProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </ProductProvider>
        </CategoryProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
