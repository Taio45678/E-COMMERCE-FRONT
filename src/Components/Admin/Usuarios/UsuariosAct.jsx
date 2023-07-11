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
  // function handleChangePagina(event, value) {
    //   dispatch(getAllUsuarios(value, 5));
    // }
    // const handlePagination = (pageNumber) => {
    //   dispatch(fetchUsuarios(pageNumber, 4));
    // };

  const deshabilitarBtn = document.getElementById('deshabilitarBtn');

    // Verificar si el elemento existe antes de agregar el evento
if (deshabilitarBtn) {
  deshabilitarBtn.addEventListener('click', () => {
    // Solicitar confirmación al usuario antes de deshabilitar
    if (window.confirm('¿Estás seguro de que deseas deshabilitar al usuario?')) {
      // Llamada a la API o al servidor para deshabilitar al usuario
      deshabilitarUsuario();
    }
  });
}


    // Función para deshabilitar al usuario (a reemplazar con tu propia lógica)
    function deshabilitarUsuario() {
      // ID del usuario a deshabilitar (a reemplazar con el valor adecuado)
      const usuarioId = '123';

      // URL de la API o servidor (reemplaza '123' con el ID del usuario correspondiente)
      const url = `https://commerce-back-2025.up.railway.app/usuarios/${usuarioId}/isban`;
      const local = `https://localhost:3000/usuarios/${usuarioId}/isban`
      // Opciones de la solicitud
      const options = {
        method: 'POST', // O el método adecuado para deshabilitar al usuario
        headers: {
          'Content-Type': 'application/json', // O el tipo de contenido adecuado
        },
      };

      // Realizar la solicitud
        fetch(url, 
          // local,
          options)
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del servidor
          console.log(data);
          alert('Usuario deshabilitado correctamente');
        })
        .catch(error => {
          // Manejar errores en la solicitud
          console.error('Error:', error);
          alert('Error al deshabilitar al usuario');
        });
      }

  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios);
  const totalPages = useSelector((state) => state.totalPages);

  useEffect(() => {
    dispatch(fetchUsuarios(1, 4));
  }, [dispatch]);

  
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
            <button id="deshabilitarBtn">Deshabilitar</button>
              <Link
                to={`/admin/perfilUsuario/${usuario.id}`}
                className={s.accion}
                style={{ textDecoration: "none" }}
              >
                <button>ver</button>
              </Link>
              <script src="script.js"></script>
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
