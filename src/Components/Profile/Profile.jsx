import React from "react";
import s from "./Profile.module.css";
import { Link, Outlet } from "react-router-dom";

//####################################

export default function Profile() {
  return (
    <div className={s.fondo}>
      <div className={s.navBar}>
        <div className={s.caja1}>
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt=""
            className={s.imagen}
          />
          <h1>Nombre Apellido</h1>
          <p>Rol: Administrador</p>
        </div>
        <div className={s.caja2}>
          <Link
            to="/profile/compras"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            COMPRAS
          </Link>

          <Link
            to="/profile/misDatos"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            MIS DATOS
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}
