import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest } from '../api/auth.js';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  // Clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data.message);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
      }}
    >

      {children}
    </AuthContext.Provider>
  )
};