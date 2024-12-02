import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/routes";

const Card = ({ data }) => {
  console.log(data);
  const { name, username, id, email, phone, website } = data;

  const location = useLocation();
  console.log(`/dentista/${id}`);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/dentista/${id}`}>
        <img src="/images/doctor.jpg" alt="foto del doctor" />
        <p>{name} </p>
        <p>{username}</p>

        {location.pathname === `/dentista/${id}` && (
          <>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
          </>
        )}
      </Link>
      <button onClick={addFav} className="favButton">
        {" "}
        ⭐ Añadir a favoritos
      </button>
    </div>
  );
};

export default Card;
