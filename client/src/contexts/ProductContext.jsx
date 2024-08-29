import { createContext, useContext, useState } from 'react';
import {
  createProductService,
  getProductService,
  getProductsService,
  getRecentProductsService,
  updateProductService,
  deleteProductService,
} from '../services/productServices';
import { toast } from 'react-hot-toast';

// Crear el contexto
const ProductContext = createContext();

// Hook personalizado para usar el contexto de productos
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within an AuthProvider');
  return context;
};

// Proveedor de productos
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const createProduct = async (product) => {
    try {
      const res = await createProductService(product);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductService(id);
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await getProductsService();
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentProducts = async () => {
    try {
      const res = await getRecentProductsService();
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductService(id, product);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductService(id);
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { duration: 3000 });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        products,
        createProduct,
        getProduct,
        getProducts,
        getRecentProducts,
        updateProduct,
        deleteProduct,
        loading
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
