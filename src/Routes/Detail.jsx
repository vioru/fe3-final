import { useEffect, useState } from "react";
import { urlApi } from "../utils/urls";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "../Components/Table";
import { useContextGlobal} from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { state } = useContextGlobal();
  const navigate = useNavigate();
  
// const [dentist, setDentist] = useState();
// const url = urlApi + "/" + id;
  // useEffect(() => {
  //   axios(url)
  //     .then((res) => {
  //       setDentist(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [url]);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      
      <i class="fa-solid fa-left-long icon-text" onClick={() => navigate(-1)}> </i>
      <p className="icon-text">Atrás</p>

      <h1 className="detail-container">Datos del dentista # {id} </h1>
      {state.detail && <Table dentist={state.detail}  />} 

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
