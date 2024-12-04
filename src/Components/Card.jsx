import { Link } from "react-router-dom";
import { useContextGlobal } from "../utils/global.context";
import { useLocation } from "react-router-dom";

const Card = ({ data, photo }) => {
  const { dispatch , state } = useContextGlobal();
  const { name, username, id } = data;
  const location = useLocation();
  // console.log(location);
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_FAV", payload: data });
  };

  const deleteFav = (id) => {
    console.log(id);   
    const updateFavs = state.favs.filter((item) => item.id !== id);
    console.log(updateFavs);
    dispatch({ type: "UPDATE_FAV", payload: updateFavs });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id 
       No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle 
      Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      {location.pathname === "/favs" ?
      (<>
        <img src={photo} alt="foto del doctor" />
        <p>{name} </p>
        <p>{username}</p>
      
      </>) :
        ( <Link
          className="card-link"
          onClick={() => dispatch({ type: "GET_DETAIL", payload: data })}
          to={`/dentista/${id}`}>
          <img src={photo} alt="foto del doctor" />
          <p>{name} </p>
          <p>{username}</p>
        </Link>
  )}
      {location.pathname === "/favs" ?  <button onClick={() => deleteFav(id)} className="deleteFav">
        ⭐ Eliminar favorito
      </button>:
            <button onClick={addFav} className="favButton">
        ⭐ Añadir a favoritos
      </button> }

    </div>
  );
};

export default Card;
