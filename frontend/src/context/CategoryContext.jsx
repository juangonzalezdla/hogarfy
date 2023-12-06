import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  createCategoryRequest,
  getCategoriesRequest,
  getCategoryRequest,
  updateCategoryRequest,
  deleteCategoryRequest,
} from "../api/requests.js";

export const CategoryContext = createContext();

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context)
    throw new Error("useCategory must be used within an CategoryProvider");
  return context;
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState(null);

  const getCategories = async () => {
    try {
      const res = await getCategoriesRequest();
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async (id) => {
    try {
      const res = await getCategoryRequest(id);
      setCategoryData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createCategory = async (product) => {
    try {
      const res = await createCategoryRequest(product);
      console.log(res.data);
      toast.success('Categoria creada con éxito!', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible crear la categoria', {duration: 4000});
    }
  };

  const updateCategory = async (id, product) => {
    try {
      const res = await updateCategoryRequest(id, product);
      console.log(res.data);
      toast.success('Categoria actualizada', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible actualizar la categoria', {duration: 4000});
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryRequest(id);
      if (res.status === 204) setCategories(categories.filter((category) => category._id !== id));
      console.log(res.data);
      toast.success('Categoria eliminada', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible eliminar la categoria', {duration: 4000});
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        getCategories,
        categories,
        getCategory,
        categoryData,
        createCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};