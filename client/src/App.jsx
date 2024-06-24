import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthContext';
import { UserProvider } from './account/context/UserContext';
import { ProductProvider } from './dashboard/context/ProductContext';
import { CategoryProvider } from './dashboard/context/CategoryContext';
import LogUpPage from './auth/pages/LogUpPage';
import LogInPage from './auth/pages/LogInPage';
import Home from './home/Home';

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
    path: '/account/:id/',
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
]);

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ProductProvider>
          <CategoryProvider>
            <RouterProvider router={router} />
          </CategoryProvider>
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
