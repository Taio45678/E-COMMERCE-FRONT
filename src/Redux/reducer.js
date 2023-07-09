import {
  GET_DETAIL,
  SET_USUARIO_DETAIL,
  CLEAR_USUARIO_DETAIL,
} from "./actions";

//Valores iniciales del estado global
const initialState = {
  nombreCategoria: "",
  allProducts: [],
  allProductsAux: [],
  details: [],
  favoritos: [],
  categorias: [],
  carrito: [],
  paginas: 0,
  busquedaProducto: [],
  pagsBusqueda: 0,
  usuarioDetail: [],
  usuariosHabilidatos: [],
  usuariosHabilidatosAux: [],
  usuariosDesabilitados: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    //aca van las acciones que se requieran hacer de redux

    //Accion de prueba para la funcionalidad de redux
    case "TEST_ACTION":
      return {
        ...state,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: payload.productos,
        allProductsAux: payload.productos,
        paginas: payload.totalPages,
      };
    case "GET_ALL_USUARIOS":
      return {
        ...state,
        usuariosHabilidatos: payload,
        usuariosHabilidatosAux: payload,
        paginas: payload.totalPages,
      };

    case "GET_ALL_CATEGS":
      return {
        ...state,
        categorias: payload,
      };

    case "NAME_CATEGORIA":
      return {
        ...state,
        nombreCategoria: payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        details: payload,
      };
    case "USUARIO_ID":
      return {
        ...state,
        usuarioDetail: payload,
      };

    case "APLICAR_FILTROS":
      var arrayFiltrado = [];
      var arrayCatYColor = payload;
      state.allProducts.forEach((producto) => {
        var arrayColores = producto.colorproducto.split(",");
        arrayCatYColor.forEach((param) => {
          if (arrayColores.includes(param) || producto.categoria === param) {
            arrayFiltrado.push(producto);
          }
        });
      });
      return {
        ...state,
        allProducts: arrayFiltrado,
      };

    case "ADD_FAVORITES":
      var favs = state.favoritos;
      favs.push(payload);
      return {
        ...state,
        favoritos: favs,
      };

    case "REMOVE_FAVORITES":
      var filterFavs = state.favoritos;
      var resultFavs = filterFavs.filter(
        (prod) => prod.nombreproducto === payload.nombreproducto
      );
      return {
        ...state,
        favoritos: resultFavs,
      };

    case "AGREGAR_AL_CARRITO":
      return {
        ...state,
        carrito: [...state.carrito, payload],
      };
    case "BUSCAR_PRODUCTO":
      return {
        ...state,
        busquedaProducto: payload.data.productos,
        pagsBusqueda: payload.data.totalPages,
      };
    case "LIMPIAR_TODO":
      return {
        ...state,
        allProducts: state.allProductsAux,
      };
    case SET_USUARIO_DETAIL:
      return {
        ...state,
        usuarioDetail: payload,
      };
    case CLEAR_USUARIO_DETAIL:
      return {
        ...state,
        usuarioDetail: [],
      };

    default:
      return state;
  }
}
