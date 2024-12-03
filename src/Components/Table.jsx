import React from 'react'
import { urlImg } from "../utils/urls";

function Table( {dentist}) {
 
const {name ,id, email, phone, website}= dentist


  return (
<div className='table-container'>
<img
                src={urlImg[id]}
                alt="Avatar"
                className="contact-avatar"
              />

<table className="">
        
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
         
            <tr >
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          </tbody>
      </table>
              

</div>

  )
}

export default Table
