import React from "react";
import s from "./UsuariosAct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUsuarioDetail } from "../../../Redux/actions";

export default function UsuariosAct() {
  const losUsuarios = useSelector((state) => state.usuariosHabilidatos);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleVerClick = (usuario) => {
    dispatch(setUsuarioDetail(usuario));
  };

  return (
    <div className={s.fondo}>
      <p>Usuarios Habilitados</p>
      <div className={s.barra}>
        <p>Imagen</p>
        <p>Usuario</p>
        <p>Perfil</p>
        <p>Rol</p>
        <p>Acción</p>
      </div>
      {losUsuarios.map((usuario) => (
        <div className={s.usuarios} key={usuario.id}>
          <div className={s.cajaImagen}>
            <img src={usuario.img} alt="" className={s.imagen} />
          </div>
          <div className={s.username}>{usuario.username}</div>
          <div className={s.rol}>{usuario.rol}</div>
          <div className={s.accion}>
            <button>Desabilitar</button>
            <Link to={"/admin/perfilUsuario/id"}>
              <button>ver</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
