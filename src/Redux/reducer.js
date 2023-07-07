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
  usuariosHabilidatos: [
    {
      id: "1235",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/326093466_847606759648444_4882688320442359741_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5dVtlXkAXQAX-_i2Ux&_nc_ht=scontent.fcor16-1.fna&oh=00_AfCmEl3zkjre2GzG4hdNdwP-AY64SeyoVUfVy7s9gqs5Jw&oe=64ABBCC9",
      username: "Usuario 13",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "5168",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/271639251_1299525743867923_7947322043013289355_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nC4hLWNSmO0AX8-teMn&_nc_ht=scontent.fcor16-1.fna&oh=00_AfAeRNjaVdcLjubUooJxApiIgx3fOgActSOcV1CIKXOdmQ&oe=64AB30C5",
      username: "Usuario 13",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "9662",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/322395220_1562214927539151_2461126355171949862_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BzpRTonBsKQAX9dLeWT&_nc_ht=scontent.fcor16-1.fna&oh=00_AfCI8YmYlzXlsAir4JGBjW3OtsxAoNXDEe7YShlil5bPXw&oe=64AB6DBD",
      username: "Usuario 13",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "8543",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/310248861_1780316039000531_1917518968625491031_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=EJp-mrLWn18AX-YH_9m&_nc_ht=scontent.fcor16-1.fna&oh=00_AfDwPUdayRQzKtcqQ3Ou1PyvY2iQ7KZa7Uu9ccst6bTGbw&oe=64AB104C",
      username: "Usuario 20",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "4256",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/352303199_6422854201130153_501336245878000780_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7kYQVP0MskwAX-tVMvA&_nc_ht=scontent.fcor16-1.fna&oh=00_AfB3Fg1ZC09WTEYt6UqgDxRADuA-iiStGkEpjCccLnNXEQ&oe=64AC1C63",
      username: "Usuario 15",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "3685",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/319316266_5508680592574598_5686338558756470261_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HiSq9nDP2zAAX_1tZZ_&_nc_ht=scontent.fcor16-1.fna&oh=00_AfCDiqOn693E1A-xWAEey1iEkLJW7q9IowYJ4awJv3Kctg&oe=64AB325A",
      username: "Usuario 18",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "6578",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/280287426_752048519510468_1695207957210990170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pkHaSupq-D4AX8tASJq&_nc_ht=scontent.fcor16-1.fna&oh=00_AfBJFa8xN09N1Yn7NShbpXrMmbNlhk9o4fBAx9imGPUWRg&oe=64AB14CE",
      username: "Usuario 5",
      password: "2543185",
      rol: "Usuario",
    },
  ],
  usuariosDesabilitados: [
    {
      id: "4256",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/352303199_6422854201130153_501336245878000780_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7kYQVP0MskwAX-tVMvA&_nc_ht=scontent.fcor16-1.fna&oh=00_AfB3Fg1ZC09WTEYt6UqgDxRADuA-iiStGkEpjCccLnNXEQ&oe=64AC1C63",
      username: "Usuario 15",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "3685",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/319316266_5508680592574598_5686338558756470261_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HiSq9nDP2zAAX_1tZZ_&_nc_ht=scontent.fcor16-1.fna&oh=00_AfCDiqOn693E1A-xWAEey1iEkLJW7q9IowYJ4awJv3Kctg&oe=64AB325A",
      username: "Usuario 18",
      password: "2543185",
      rol: "Usuario",
    },
    {
      id: "6578",
      name: "Nombre Apellido",
      img: "https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/280287426_752048519510468_1695207957210990170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pkHaSupq-D4AX8tASJq&_nc_ht=scontent.fcor16-1.fna&oh=00_AfBJFa8xN09N1Yn7NShbpXrMmbNlhk9o4fBAx9imGPUWRg&oe=64AB14CE",
      username: "Usuario 5",
      password: "2543185",
      rol: "Usuario",
    },
  ],
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
