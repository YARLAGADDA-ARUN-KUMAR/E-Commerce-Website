import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer"; 

const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
        fav: [],
    };

    const [ { cart , fav} , cartDispatch] = useReducer(cartReducer, initialState);

    return (
        <cartContext.Provider value={{ cart, fav, cartDispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => useContext(cartContext);
