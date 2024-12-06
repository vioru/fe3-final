import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { urlApi } from "../utils/urls";
import axios from "axios";

const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
const initialState = {
  theme: "",
  data: [],
  favs: storedFavs,
  detail: {},
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(urlApi)
      .then((res) => {
        dispatch({ type: "GET_DATA", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (state.favs.length > 0) {
      localStorage.setItem("favs", JSON.stringify(state.favs));
    }
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
