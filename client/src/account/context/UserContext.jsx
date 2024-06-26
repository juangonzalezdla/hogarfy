import { createContext, useContext, useState } from 'react';
import {
  getUserService,
  updateUserService,
  updateEmailService,
  updatePasswordService,
  deleteUserService,
} from '../../services/userServices';
import { toast } from 'react-hot-toast';

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto de usuario
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within an AuthProvider');
  return context;
};

// Proveedor de usuario
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const getUser = async (id) => {
    try {
      const res = await getUserService(id);
      setUserData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const res = await updateUserService(id, user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const updateEmail = async (id, user) => {
    try {
      const res = await updateEmailService(id, user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const updatePassword = async (id, user) => {
    try {
      const res = await updatePasswordService(id, user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const deleteUser = async (id, user) => {
    try {
      const res = await deleteUserService(id, user);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        getUser,
        updateUser,
        updateEmail,
        updatePassword,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
