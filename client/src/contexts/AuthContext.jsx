import { createContext, useContext, useState, useEffect } from 'react';
import {
  logUpService,
  logInService,
  LogOutService,
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
      setIsAuthorized(res.data.user.isAdmin);
      setLoading(false);
      setUser(res.data.user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const logOut = async () => {
    try {
      const res = await LogOutService();
      setUser(null);
      setIsAuthenticated(false);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkLogIn = async () => {
      try {
        const res = await verifyTokenService();
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
  
        setIsAuthenticated(true);
        setIsAuthorized(res.data.isAdmin);
        setLoading(false);
        setUser(res.data);
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
