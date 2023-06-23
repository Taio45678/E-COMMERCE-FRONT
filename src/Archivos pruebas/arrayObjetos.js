
const objeto1 = {
    name: "gafas",
    image: 'https://www.xiaomiadictos.com/wp-content/uploads/2022/04/xiaomi-gafas-sol-aviador-pilot-768x405.jpg',
    stock: "15",
    description: "gafas de sol",
    price: "50",
    colores: ["Verde", "Negro", "Dorado"]
}

const objeto2 = {
    name: "pantalon",
    image: "https://estaticos-cdn.sport.es/clip/657b54ac-90fd-42fe-9b86-8529e59d7803_media-libre-aspect-ratio_default_0.jpg",
    stock: "5",
    description: "Pantalon de hombre",
    price: "25",
    colores: ["Verde", "Azul"]
}

const objeto3 = {
    name: "pelota",
    image: 'https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg',
    stock: "100",
    description: "Pelota para jugar futbol",
    price: "150",
    colores: ['Unicolor']
}


export default function arrayObjetos() {
    var arrayObjs = []
    arrayObjs.push(objeto1);
    arrayObjs.push(objeto2);
    arrayObjs.push(objeto3);

  return arrayObjs;  
}
