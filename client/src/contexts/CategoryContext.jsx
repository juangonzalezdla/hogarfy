import { createContext, useContext, useState } from 'react';
import {
  createCategoryService,
  getCategoryService,
  getCategoriesService,
  updateCategoryService,
  deleteCategoryService,
} from '../services/categoryServices';
import { toast } from 'react-hot-toast';

// Crear el contexto
const CategoryContext = createContext();

// Hook personalizado para usar el contexto de categories
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context)
    throw new Error('useCategory must be used within an AuthProvider');
  return context;
};

// Proveedor de categorias
export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const createCategory = async (category) => {
    try {
      const res = await createCategoryService(category);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const getCategory = async (id) => {
    try {
      const res = await getCategoryService(id);
      setCategoryData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await getCategoriesService();
      setCategories(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      const res = await updateCategoryService(id, category);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryService(id);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryData,
        categories,
        createCategory,
        getCategory,
        getCategories,
        updateCategory,
        deleteCategory,
        loading,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
