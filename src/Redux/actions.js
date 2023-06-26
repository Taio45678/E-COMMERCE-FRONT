import arrayObjetos from "../Archivos pruebas/arrayObjetos"
import axios from "axios"

export const GET_DETAIL = 'GET_DETAIL'

//Accion de prueba para probar funcionalidad de redux
export function testAction(action){
    return {
        type: 'TEST_ACTION',
        payload: action
    }
}

export function getAllProducts(){
    var arrayAllProducts = arrayObjetos()
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: arrayAllProducts
    }
}

export function getDetail(id){
    return async function(dispatch){
        const json = await axios(`http://localhost:3000/productos/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        });
    }
}