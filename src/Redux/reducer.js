

//Valores iniciales del estado global 
const initialState = {

}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        //aca van las acciones que se requieran hacer de redux 

        //Accion de prueba para la funcionalidad de redux 
        case 'TEST_ACTION':
            return {
                ...state
            }

        default: 
         return state; 
    }
}