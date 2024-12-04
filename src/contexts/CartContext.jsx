import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CART_STORAGE_KEY = 'cartItems';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  removeFromQuantity: () => {},
});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
  );

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedItem = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItem);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromQuantity = (productId) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productId);

    if (existingItemIndex !== -1) {
      const updatedItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      setCartItems(updatedItems.filter((item) => item.quantity > 0));
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeFromQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
