import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute.jsx';

import HomePage from './pages/HomePage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CartPage from './pages/CartPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import SobreNosotros from './pages/legal/SobreNosotros.jsx';
import PreguntasFrecuentes from './pages/legal/PreguntasFrecuentes.jsx';
import TerminosCondiciones from './pages/legal/TerminosCondiciones.jsx';
import Privacidad from './pages/legal/Privacidad.jsx';
import Admin from './pages/admin/Admin.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/pedidos' element={<OrdersPage />} />
          <Route path='/carrito' element={<CartPage />} />
          <Route path='/legal/sobre-nosotros/' element={<SobreNosotros />} />
          <Route path='/legal/preguntas-frecuentes/' element={<PreguntasFrecuentes />} />
          <Route path='/legal/terminos-condiciones' element={<TerminosCondiciones />} />
          <Route path='/legal/privacidad' element={<Privacidad />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;
