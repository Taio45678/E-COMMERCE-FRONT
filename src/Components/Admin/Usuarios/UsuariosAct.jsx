import React, { useEffect } from "react";
import s from "./UsuariosAct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { setUsuarioDetail } from "../../../Redux/actions";
import { Pagination } from "@mui/material";
import { getAllUsuarios, fetchUsuarios } from "../../../Redux/actions";

// ######################################

export default function UsuariosAct() {
  //const losUsuarios = useSelector((state) => state.usuariosHabilidatos);
  // const paginas = useSelector((state) => state.pagina);

  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios);
  const totalPages = useSelector((state) => state.totalPages);

  useEffect(() => {
    dispatch(fetchUsuarios(1, 4));
  }, [dispatch]);

  // function handleChangePagina(event, value) {
  //   dispatch(getAllUsuarios(value, 5));
  // }
  // const handlePagination = (pageNumber) => {
  //   dispatch(fetchUsuarios(pageNumber, 4));
  // };
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
        {usuarios.map((usuario) => (
          <div className={s.usuarios} key={usuario.id}>
            <div className={s.cajaImagen}>
              <img src={usuario.picture} alt="" className={s.imagen} />
            </div>
            <div className={s.username}>{usuario.name}</div>
            <div className={s.rol}>{usuario.rol}</div>
            <div className={s.accion}>
              <button>Desabilitar</button>
              <Link
                to={`/admin/perfilUsuario/${usuario.id}`}
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
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => dispatch(fetchUsuarios(page, 4))}
              >
                {page}
              </button>
            )
          )}
      </div>
    </div>
  );
}
