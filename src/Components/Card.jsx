import { Link } from "react-router-dom";
import { useContextGlobal } from "../utils/global.context";
import { useLocation } from "react-router-dom";

const Card = ({ data, photo }) => {
  const { dispatch, state } = useContextGlobal();
  const { name, username, id } = data;
  const location = useLocation();
  const favItem = state.favs.find((fav) => fav.id === id);
  const isFav = !!favItem;

  // console.log("los favs");
  // console.log(state.favs[0].id === id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const favRepeat = state.favs.filter((item) => item.id === id);
    // console.log("exite");
    // console.log("el lengthg" + favRepeat.length);
    // console.log(favRepeat);

    if (!(favRepeat.length > 0)) {
      console.log("hacemos el dispatch");
      dispatch({ type: "ADD_FAV", payload: data });
    }
  };

  const deleteFav = () => {
    const updateFavs = state.favs.filter((item) => item.id !== id);
    dispatch({ type: "UPDATE_FAV", payload: updateFavs });
    if (updateFavs.length === 0) {
      localStorage.setItem("favs", JSON.stringify([]));
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id 
       No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle 
      Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link
        className="card-link"
        onClick={() => dispatch({ type: "GET_DETAIL", payload: data })}
        to={`/dentista/${id}`}
      >
        <img src={photo} alt="foto del doctor" />
        <p>{name} </p>
        <p>{username}</p>
      </Link>
      {location.pathname === "/favs" || isFav ? (
        <button onClick={() => deleteFav()} className="deleteFav">
          ❌ Eliminar de favoritos
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          ⭐ Añadir a favoritos
        </button>
      )}
    </div>
  );
};

export default Card;
