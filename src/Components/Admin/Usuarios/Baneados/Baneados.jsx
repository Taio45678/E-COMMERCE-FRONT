import React, { useEffect } from "react";
import s from "./Baneados.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUsuarioDetail } from "../../../../Redux/actions";
import { Pagination } from "@mui/material";
//import { getAllUsuarios } from "../../../Redux/actions";

// ######################################

export default function Baneados() {
  const losUsuarios = useSelector((state) => state.usuariosDesabilitados);
  const dispatch = useDispatch();
  //const {usuariosHabilidatos, paginas} = useSelector((state)=>state)
  //const losUsuarios = usuariosHabilidatos;
  // useEffect(() => {
  //   dispatch(getAllUsuarios(1));
  // }, []);

  // function handleChangePagina(e, value) {
  //   dispatch(getAllUsuarios(value));
  // }
  const handleVerClick = (usuario) => {
    dispatch(setUsuarioDetail(usuario));
  };

  return (
    <div className={s.fondo}>
      <div className={s.cabezera}>
        <p>Usuarios Habilitados</p>
        <Link to={"/admin/crearUsuariosAdmin"}>
          <button>Crear Usuario</button>
        </Link>
      </div>
      <div className={s.barra}>
        <p className={s.barraimagen}>Imagen</p>
        <p className={s.barrausername}>Usuario</p>
        <p className={s.barrarol}>Rol</p>
        <p className={s.barraaccion}>Acción</p>
        <p className={s.barraaccion}>Perfil</p>
      </div>
      <div className={s.cajaUsuarios}>
        {losUsuarios.map((usuario) => (
          <div className={s.usuarios} key={usuario.id}>
            <div className={s.cajaImagen}>
              <img src={usuario.img} alt="" className={s.imagen} />
            </div>
            <div className={s.username}>{usuario.username}</div>
            <div className={s.rol}>{usuario.rol}</div>
            <div className={s.accion}>
              <button>Habilitar</button>
              <Link
                to={"/admin/perfilUsuario/id"}
                className={s.accion}
                style={{ textDecoration: "none" }}
              >
                <button>ver</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        <Pagination
          count={""}
          showFirstButton
          showLastButton
          onChange={""}
        ></Pagination>
      </div>
    </div>
  );
}
