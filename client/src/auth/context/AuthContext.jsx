import { createContext, useContext, useState, useEffect } from 'react';
import { logUpService, logInService } from '../../services/authServices';
import Cookies from 'js-cookie';

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
  const [successMessage, setSuccessMessage] = useState([]);
  const [errorsMessage, setErrorsMessage] = useState([]);

  const logUp = async (userData) => {
    try {
      const res = await logUpService(userData);
      console.log(res.data.message);
      console.log(res.data);
      setUser(res.data);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  const logIn = async (userData) => {
    try {
      const res = await logInService(userData);
      console.log(res.data.message);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
      setIsAuthorized(res.data.isAdmin);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  const logOut = () => {
    Cookies.remove('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogIn = () => {
      const cookies = Cookies.get('token');
      if (cookies.token) {
        setIsAuthenticated(true);
        setIsAuthorized(true);
        setUser(res.data);
        setLoading(false);
      } else {
        setIsAuthenticated(false);
        setIsAuthorized(false);
        setLoading(false);
      }
    };
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
        successMessage,
        errorsMessage,
        loading,
      }}
    ></AuthContext.Provider>
  );
};
