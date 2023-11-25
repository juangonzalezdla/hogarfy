import { createContext, useContext, useState, useEffect } from "react";
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
    } catch (error) {
      console.log(error);
    }
  };

  const createCategory = async (product) => {
    try {
      const res = await createCategoryRequest(product);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id, product) => {
    try {
      const res = await updateCategoryRequest(id, product);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryRequest(id);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
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