import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  createProductRequest,
  getProductsRequest,
  getProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../api/requests.js";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within an ProductProvider");
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState(null);

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      setProductData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      console.log(res.data);
      toast.success('Producto creado con éxito!', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible crear el producto', {duration: 4000});
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      console.log(res.data);
      toast.success('Producto actualizado', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible actualizar el producto', {duration: 4000});
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 204) setProducts(products.filter((product) => product._id !== id));
      console.log(res.data);
      toast.success('Producto eliminado', {duration: 4000});
    } catch (error) {
      console.log(error);
      toast.error('No fué posible eliminar el producto', {duration: 4000});
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        productData,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};