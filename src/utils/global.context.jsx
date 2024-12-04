import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { urlApi } from "../utils/urls";
import axios from "axios";
export const initialState = {
  theme: "",
  data: [],
  favs: [],
  detail: {},
  // id: "",
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(storedFavs.length);
  // console.log(state.favs);
  
  
  useEffect(() => {
    axios(urlApi)
      .then((res) => {
        dispatch({ type: "GET_DATA", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  useEffect(()=>{
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    console.log("use efect para inicio de fav");
    
    console.log(state.favs.length);
    console.log(storedFavs.length);
    
    
    if (state.favs.length === 0 && storedFavs.length > 0) {
      dispatch({ type: "ADD_FAV", payload: storedFavs });
    }
  },[])

  useEffect(() => {
    if (state.favs.length > 0) {
      localStorage.setItem("favs", JSON.stringify(state.favs)); 
    }
  }, [state.favs]);
  // estaba obteniendo el id por medio del link de la card y luego llamaba a la api y ya le pasaba a detail la info
  //  pero es mas rapido solo pasar la data al detail por medio del payload no sé si es lo mas correcto ya me corrije
  // useEffect(() => {

  //   if (!state.id ){
  //     console.log("el id esta vacio");
  //   }else{
  //     axios(urlApi+state.id)
  //     .then((res) => {
  //       console.log(res.data);
  //       dispatch({ type: "GET_DETAIL", payload: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  // }, [state.id]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
