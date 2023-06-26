import * as Yup from 'yup';


const requiredString = Yup.string().required("Campo requerido");

const regexImg = /\.(jpg|jpeg|png|gif|bmp)$/;

export const RegisterSchema = () =>{
    Yup.object().shape({
        name: requiredString.min(1, "Debes ingresar al menos 1 caracter"),
        image: requiredString.matches(regexImg, 'La ruta debe ser una imagen válida (jpg, jpeg, png, gif, bmp)'),
        stock: Yup.number()
                .integer("Ingresa un número entero")
                .positive("El stock debe ser mayor a cero")
                .required("Campo requerido"),
        description: requiredString,
        price:  Yup.number()
                .integer("Ingresa un número entero")
                .positive("El precio debe ser mayor a cero")
                .required("Campo requerido"),
        colors: Yup.array().min(1, "Debe haber al menos un color añadido")
    })
}
