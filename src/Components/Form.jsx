import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

 const [message , setMessage] =useState("")

 const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();


    

    let nameError = "";
    if (!user.name || user.name.trim().length < 3) {
      nameError ="El nombre debe tener más de 3 caracteres y no puede estar vacío.";}

    let emailError = "";
    if (!user.email ||user.email.trim().length <= 3 ||!emailRegex.test(user.email)
    ) {
      emailError ="El email no es válido. Debe tener más de 3 caracteres y cumplir el formato.";}

    if (nameError || emailError) {
      setErrors({
        name: nameError,
        email: emailError,
      });
      setMessage("")
    } else {
      setErrors({
        name: "",
        email: "",
      });
      setMessage(`Gracias ${user.name}, te contactaremos cuanto antes a tu email ${user.email}`)

      setUser({
        name: "",
        email: "",
      });
    }

    // if (!user.name || user.name.length <= 3) {
    //   setErrors({...errors, name:"El nombre debe tener más de 3 caracteres y no puede estar vacío."});
    // }if (!user.email || user.email.length <= 3 || !emailRegex.test(user.email)) {
    //   console.log({...errors, email:"El email no es válido. Debe tener más de 3 caracteres y cumplir el formato."});
    // } else {
    //   console.log("Formulario válido. Datos listos para enviar:", user);
    // }

    // if (
    //   user.name.trim().length >= 3
    //   &&
    //   user.email.trim().length >= 3
    //   && emailRegex.test(user.email)
    // ) {    console.log("entre a el if y es correcto")

    // } else {
    //  console.log("datos inconrrectos");

    // }
  };

  return (
    <div>

      
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <label>Correo</label>
        <input
          type="text"
          placeholder="Ingresa tu Correo "
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <button type="submit">Enviar</button>
        {errors.name ? <p>{errors.name}</p> : ""}
        {errors.email ? <p>{errors.email}</p> : ""}
      </form>
      {message ? (
        <b> {message} </b>
      ) : null}
    </div>
  );
};

export default Form;
