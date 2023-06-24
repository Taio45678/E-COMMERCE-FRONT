

//Valores iniciales del estado global 
const initialState = {
    allProducts: [],
    details: [],
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        //aca van las acciones que se requieran hacer de redux 

        //Accion de prueba para la funcionalidad de redux 
        case 'TEST_ACTION':
            return {
                ...state
            }

        case 'GET_ALL_PRODUCTS':
            return{
                ...state,
                allProducts: payload
            }

        case 'GET_DETAIL':
            return {
                ...state,
                details: payload
            }

        default: 
         return state; 
    }
}