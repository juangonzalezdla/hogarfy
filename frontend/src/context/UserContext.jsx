import { createContext, useContext, useState, useEffect } from "react";
import {
  getUserRequest,
  updateDataRequest,
  updateEmailRequest,
  updatePasswordRequest,
  deleteUserRequest,
} from "../api/requests.js";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within an UserProvider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [errorsMessage, setErrorsMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState([]);
  const [userData, setUserData] = useState(null);

  // Clear errors and success messages after 5 seconds
  useEffect(() => {
    if (errorsMessage.length > 0 || successMessage.length > 0) {
      const timer = setTimeout(() => {
        setErrorsMessage([]);
        setSuccessMessage([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorsMessage, successMessage]);

  const getUser = async (id) => {
    try {
      const res = await getUserRequest(id);
      console.log(res.data);
      setUserData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserData = async (id, user) => {
    try {
      const res = await updateDataRequest(id, user);
      console.log(res.data.message);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  const updateUserEmail = async (id, user) => {
    try {
      const res = await updateEmailRequest(id, user);
      console.log(res.data.message);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  const updateUserPassword = async (id, user) => {
    try {
      const res = await updatePasswordRequest(id, user);
      console.log(res.data.message);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  const deleteUser = async (id, user) => {
    try {
      const res = await deleteUserRequest(id, user);
      console.log(res.data.message);
      setSuccessMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      setErrorsMessage(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        userData,
        updateUserData,
        updateUserEmail,
        updateUserPassword,
        deleteUser,
        successMessage,
        errorsMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};