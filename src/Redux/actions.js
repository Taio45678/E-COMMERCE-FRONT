

//Accion de prueba para probar funcionalidad de redux
export function testAction(action){
    return {
        type: 'TEST_ACTION',
        payload: action
    }
}