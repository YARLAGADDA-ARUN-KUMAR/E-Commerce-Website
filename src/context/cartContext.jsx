import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer"; 

const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
    };

    const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState);

    return (
        <cartContext.Provider value={{ cart, cartDispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => useContext(cartContext);
