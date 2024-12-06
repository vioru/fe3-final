import React from "react";
import Card from "../Components/Card";
import { useContextGlobal} from "../utils/global.context"
import { urlImg } from "../utils/urls";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  console.log(state.favs);
  

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.length > 0 ?
        (<> 
              {[...state.favs].reverse().map((favs)=>(
           <Card key={favs.id} data ={favs} photo ={urlImg[favs.id]} />
        ))}
        </>) : (
          <p className="noFav"> No hay favoritos aún</p> ) }
      </div>
    </>
  );
};

export default Favs;
