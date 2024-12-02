import { useEffect, useState } from "react";
import Card from '../Components/Card'
import { urlApi } from "../utils/urls";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  console.log(urlApi+"/"+id);

  const [dentist, setDentist] = useState()
  const url = urlApi+"/"+id


  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        // dispatch({ type: "GET_DATA", payload: res.data });
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);


 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentist && (
        <Card data={dentist} />
      )}
      <p>dentista con id {id}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail