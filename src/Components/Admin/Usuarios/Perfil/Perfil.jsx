import { useDispatch, useSelector } from "react-redux";
import { clearUsuarioDetail } from "../../../../Redux/actions";
import s from "./Perfil.module.css";
import { Link } from "react-router-dom";

export default function Perfil() {
  return (
    <div className={s.fondo}>
      <div className={s.cajaInterna2}>
        <div className={s.datosC}>
          <div className={s.dato1}>
            <img
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
              alt=""
              className={s.avatar}
            />
            <p>Nombre Apellido</p>
          </div>
        </div>
        <h1>Datos de cuenta</h1>
        <div className={s.datosP}>
          <div className={s.dato1a}>
            <h2>Usuario</h2>

            <p>Nombre Completo</p>
          </div>
          <div className={s.dato1a}>
            <h2>Id</h2>
            <p>5354</p>
          </div>
          <div className={s.dato1a}>
            <h2>Rol</h2>
            <p>Usuario</p>
          </div>

          <div className={s.dato1a}>
            <h2>Contraseña</h2>
            <p>***********</p>
          </div>
        </div>
        <button className={s.cerrarCuenta}>
          <Link to="/admin/usuarios">
            <h1>Volver</h1>
          </Link>
        </button>
      </div>
    </div>
  );
}
