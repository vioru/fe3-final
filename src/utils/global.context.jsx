import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { urlApi } from "../utils/urls";
import axios from "axios";
export const initialState = {
  theme: "", 
  data: [],
  favs:{}
}


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    axios(urlApi)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: "GET_DATA", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);