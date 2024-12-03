import { Link} from "react-router-dom";
import { useContextGlobal} from "../utils/global.context"



const Card = ({ data ,photo }) => {
  
  const { dispatch } = useContextGlobal();

  const { name, username, id, } = data;


  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link className="card-link"  onClick={() => dispatch({ type: "GET_DETAIL", payload: data })} to={`/dentista/${id}`} >
        <img src={photo} alt="foto del doctor" />
        <p>{name} </p>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐ Añadir a favoritos
      </button>
    </div>
  );
};

export default Card;
