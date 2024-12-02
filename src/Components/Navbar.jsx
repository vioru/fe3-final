import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routes } from "../utils/routes";
import { useContextGlobal} from "../utils/global.context";
import "../Styles/Navbar.modules.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { dispatch ,state } = useContextGlobal();
  console.log(state.theme);
  

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
  return (
    <nav className='navbar-container'>
      <Link to={routes.home}>
      Inicio
      </Link>

      <Link to={routes.contact}>
      Contacto
      </Link>

      <Link to={routes.favs}>
        Mis favoritos
      </Link>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}
      >{state.theme == "dark" ? <p>☀️</p> : <p>🌙</p>}</button>
    </nav>
  )
}

export default Navbar