import { createContext, useContext, useReducer, useEffect } from "react";
import { loginReducer } from "../reducers/loginReducer";

const loginContext = createContext();

export const LoginProvider = ({ children }) => {
  const initialToken = localStorage.getItem("login_token") || "";

  const initialState = {
    email: "",
    password: "",
    token: initialToken,
  };
  
  const [{ email, password, token }, loginDispatch] = useReducer(
    loginReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("login_token", token);
  }, [token]);


  return (
    <loginContext.Provider value={{ email, password, token, loginDispatch }}>
      {children}
    </loginContext.Provider>
  );
};

export const useLogin = () => useContext(loginContext);