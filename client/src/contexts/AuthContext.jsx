import { createContext, useContext, useState, useEffect } from 'react';
import {
  logUpService,
  logInService,
  verifyTokenService,
} from '../services/authServices';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const logUp = async (user) => {
    try {
      const res = await logUpService(user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const logIn = async (user) => {
    try {
      const res = await logInService(user);
      setIsAuthenticated(true);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const logOut = () => {
    Cookies.remove('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogIn = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenService(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        
        setIsAuthenticated(true);
        setIsAuthorized(res.data.isAdmin);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logUp,
        logIn,
        logOut,
        isAuthenticated,
        isAuthorized,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
