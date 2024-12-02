import React from 'react'
import { routes } from "../utils/routes";
import { Link } from 'react-router-dom';

function NotFound() {
    const image = "https://api-prd.ynk.cl/medias/BAMERS-1400x401-ErrorPage-ES-CL-1400W.png?context=bWFzdGVyfGltYWdlc3wyNTM5Nzh8aW1hZ2UvcG5nfGFHRmhMMmd4TXk4NU1UZ3dNREEzTlRrMk1EWXlMMEpCVFVWU1UxOHhOREF3ZURRd01WOUZjbkp2Y2xCaFoyVmZSVk5mUTB4Zk1UUXdNRmN1Y0c1bnwzM2FhZGQ4ODAyMjk4ODNiNTM3YWUyMGExMjkzMGJmZWYwY2JmOTM5NTY1Yzg1MDRjZjU0MzRhNjQ4NGNhY2Fi"

  return (
    <div>

        <img src={image} alt="pagina no encontrada" />
        <Link to={routes.home}>
        Volver al Incio
        </Link>    
    </div>
  )
}

export default NotFound
