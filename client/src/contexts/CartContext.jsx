import { createContext, useContext, useState, useEffect } from 'react';
import { getProductService } from '../services/productServices';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto de carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within an AuthProvider');
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    // Obtener el carrito del localStorage al cargar la página
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const fetchProductData = async (_id) => {
    try {
      const res = await getProductService(_id);
      const product = res.data;
      console.log(product);
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const addToCart = async (_id) => {
    const product = await fetchProductData(_id);
    console.log(product);
    if (product) {
      setCartProducts((prevItems) => {
        const itemExists = prevItems.find((item) => item._id === _id);
        if (itemExists) {
          return prevItems.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    }
  };

  const removeFromCart = (_id) => {
    setCartProducts((prevItems) =>
      prevItems.filter((item) => item._id !== _id)
    );
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
