import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartContext = createContext();

const getInitialData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
    return [];
  }
};


export const CartProvider = ({ children }) => {
  const initialState = {
    cart: getInitialData("cart_items"),
    fav: getInitialData("wishlist_items"),
  };

  const [{ cart, fav }, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist_items", JSON.stringify(fav));
  }, [fav]);


  return (
    <cartContext.Provider value={{ cart, fav, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);