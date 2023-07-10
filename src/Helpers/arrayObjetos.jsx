import axios from 'axios'
import React from 'react'

export default function ArrayObjetos() {

  const arrayObjetos = [
    {
    nombreproducto: "reloj antiguo",
    fotoprinc:"https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891565_640.png",
    disponibproducto:155,
    descproducto: "Telefono inteligente"
    ,precioproducto:5,
    colorproducto:["dorado"],
    nombrecat:"Hogar"
    },
    {    nombreproducto: "Boligrafos",
        descproducto: "Bolígrafos de varios colores para que puedas escribir todo lo que quieras ",
        colorproducto: [
          "Rojo",
          "Negro",
          "Azul"
        ],
        fotoprinc: "http://res.cloudinary.com/dmjkjz1oa/image/upload/v1688138607/shoppieimg/dwi6vcxhcdjkxfm3kxgi.jpg",
        precioproducto: 6,
        disponibproducto: 1000,
        nombrecat:"Papelería"
    },
    {
      "nombreproducto": "Perrito negro",
          "descproducto": "Perrito amigable y acompañante ",
          "colorproducto": [
            "negro"
          ],
          "fotoprinc": "https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg",
          "precioproducto": 9,
          "disponibproducto": 1,
    "nombrecat":"Animales"
    },
    {
      "nombreproducto": "Decorador extraño",
           "descproducto": "Decorador con forma extraña",
           "colorproducto": [
             "Unico"
           ],
           "fotoprinc": "https://www.pakainfo.com/wp-content/uploads/2021/09/test-image-online-300x148.jpg",
           "precioproducto": 1,
           "disponibproducto": 15,
     "nombrecat":"Hogar"	
     },
     {"nombreproducto": "TV Antiguo",
     "descproducto": "TV con diseño antiguo en blanco y negro",
     "colorproducto": [
       "Unico"
     ],
     "fotoprinc": "https://cdn.pixabay.com/photo/2013/07/13/14/02/tv-162002_640.png",
     "precioproducto": 20,
     "disponibproducto": 10,
    "nombrecat":"Hogar"
    },
    {
      "nombreproducto": "Fresas",
            "descproducto": "Fresas buenas para comer ",
            "colorproducto": [
              "Rojo"
            ],
            "fotoprinc": "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_640.jpg",
            "precioproducto": 2,
            "disponibproducto": 100,
      "nombrecat":"Alimentos"},
      {"nombreproducto": "Cerezas",
          "descproducto": "cerezas buenas para comer ",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_640.jpg",
          "precioproducto": 7,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    { "nombreproducto": "Miel",
          "descproducto": "Miel dulce directamente del panal ",
          "colorproducto": [
            "miel"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg",
          "precioproducto": 15,
          "disponibproducto": 10,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Pan",
          "descproducto": "Pan recien hecho ",
          "colorproducto": [
            "Unico"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
          "precioproducto": 10,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Labial",
          "descproducto": "Labial color intenso para mujer",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
          "precioproducto": 11,
          "disponibproducto": 50,
    "nombrecat":"Belleza"},
    {"nombreproducto": "Kit belleza",
          "descproducto": "Kit belleza completo ",
          "colorproducto": [
            "Rojo",
            "azul"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/09/13/16/08/cosmetics-2746013_640.jpg",
          "precioproducto": 12,
          "disponibproducto": 40,
    "nombrecat":"Belleza"},
    {"nombreproducto": "Cerezas premium",
          "descproducto": "cerezas buenas para comer ",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_640.jpg",
          "precioproducto": 18,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    { "nombreproducto": "Miel",
          "descproducto": "Miel dulce directamente del panal ",
          "colorproducto": [
            "miel"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg",
          "precioproducto": 4,
          "disponibproducto": 10,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Pan",
          "descproducto": "Pan recien hecho ",
          "colorproducto": [
            "Unico"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
          "precioproducto": 8,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    {
      nombreproducto: "reloj antiguo",
      fotoprinc:"https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891565_640.png",
      disponibproducto:155,
      descproducto: "Telefono inteligente"
      ,precioproducto:11,
      colorproducto:["dorado"],
      nombrecat:"Hogar"
      },
      {    nombreproducto: "Boligrafos",
          descproducto: "Bolígrafos de varios colores para que puedas escribir todo lo que quieras ",
          colorproducto: [
            "Rojo",
            "Negro",
            
          ],
          fotoprinc: "http://res.cloudinary.com/dmjkjz1oa/image/upload/v1688138607/shoppieimg/dwi6vcxhcdjkxfm3kxgi.jpg",
          precioproducto: 17,
          disponibproducto: 1000,
          nombrecat:"Papelería"
      },
      {"nombreproducto": "Labial",
          "descproducto": "Labial color intenso para mujer",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
          "precioproducto": 11,
          "disponibproducto": 50,
    "nombrecat":"Cosmeticos"},
    {"nombreproducto": "Kit belleza",
          "descproducto": "Kit belleza completo ",
          "colorproducto": [
            "Rojo",
            "azul"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/09/13/16/08/cosmetics-2746013_640.jpg",
          "precioproducto": 19,
          "disponibproducto": 40,
    "nombrecat":"Cosmeticos"},
        ]
    

function handleClick(e){
  arrayObjetos.forEach(objeto=>{
    axios.post("/productoCrear", objeto)
  })
  
}

  return (
    <div>
      <button onClick={handleClick}>arrayObjetos</button></div>
  )
}
