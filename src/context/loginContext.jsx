import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

const loginContext = createContext();

export const LoginProvider = ({ children }) => {
  const intialState = {
    email: "",
    password: "",
    token: "",
  };
  const [{ email, password, token }, loginDispatch] = useReducer(
    loginReducer,
    intialState
  );

  return (
    <loginContext.Provider value={{ email, password, token, loginDispatch }}>
      {children}
    </loginContext.Provider>
  );
};

export const useLogin = () => useContext(loginContext);
