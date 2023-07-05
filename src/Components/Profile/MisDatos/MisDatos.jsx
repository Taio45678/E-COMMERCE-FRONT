import React from "react";
import s from "./MisDatos.module.css";

// ########## Aqui sera el apartado de Datos del Usuario ##########
export default function MisDatos() {
  return (
    <div className={s.cajaInterna2}>
      <h1>Datos de cuenta</h1>
      <div className={s.datosC}>
        <div className={s.dato1a}>
          <h2>Usuario</h2>
          <p>Nombre Apellido</p>
        </div>
        <div className={s.dato1a}>
          <h2>Email</h2>
          <p>nombre123@gmail.com</p>
        </div>
      </div>
      <h1>Datos personales</h1>
      <div className={s.datosP}>
        <div className={s.dato1a}>
          <h2>Nombre y Apellido</h2>
          <p>Nombre Completo</p>
        </div>
        <div className={s.dato1a}>
          <h2>Edad</h2>
          <p>27</p>
        </div>
        <div className={s.dato1a}>
          <h2>Direccion</h2>
          <p>callefalsa 123</p>
        </div>
        <div className={s.dato1a}>
          <h2>Telefono</h2>
          <p>123456789</p>
        </div>
        <div className={s.dato1a}>
          <h2>Contraseña</h2>
          <p>***********</p>
        </div>
      </div>
      <button className={s.cerrarCuenta}>
        <h1>Cerrar cuenta</h1>
      </button>
    </div>
  );
}
