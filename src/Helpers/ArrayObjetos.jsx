import axios from 'axios'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function ArrayObjetos() {

  const { allProducts} = useSelector((state)=>state)

  const arrayObjetos = [
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
              descproducto: "Reloj inteligente antiguo"

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
         {
  
      "nombreproducto": "Camiseta de algodón",
      "descproducto": "Camiseta básica de algodón para uso diario de altísima calidad",
      "colorproducto": ["Blanco", "Negro", "Gris"],
      "fotoprinc": "https://e7.pngegg.com/pngimages/64/637/png-clipart-t-shirt-cotton-clothing-collar-t-shirt-printing-tshirt-blue.png",
      "precioproducto": 15,
      "disponibproducto": 50,
      "nombrecat": "ropa"
    },
    {
      "nombreproducto": "Bolso de cuero",
      "descproducto": "Bolso elegante y espacioso hecho de cuero genuino",
      "colorproducto": ["Marrón", "Negro", "Rojo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/970/421/png-transparent-handbag-tote-bag-museum-of-bags-and-purses-leather-pomme-de-terre-brown-leather-material.png",
      "precioproducto": 79,
      "disponibproducto": 10,
      "nombrecat": "accesorios"
    },
    {
      "nombreproducto": "Vestido floral",
      "descproducto": "Vestido de verano con estampado floral y corte ajustado",
      "colorproducto": ["Azul", "Rosa", "Blanco"],
      "fotoprinc": "https://c0.klipartz.com/pngpicture/4/835/gratis-png-falda-vestido-flor-vestido-floral-negro-thumbnail.png",
      "precioproducto": 39,
      "disponibproducto": 15,
      "nombrecat": "ropa"
    },
    {
      "nombreproducto": "Mochila resistente al agua",
      "descproducto": "Mochila versátil con compartimentos y protección contra la lluvia",
      "colorproducto": ["Negro", "Gris", "Verde"],
      "fotoprinc": "https://w7.pngwing.com/pngs/659/184/png-transparent-backpack-backpack-luggage-bags-black-messenger-bags-thumbnail.png",
      "precioproducto": 29,
      "disponibproducto": 40,
      "nombrecat": "accesorios"
    },
    {
      "nombreproducto": "Gafas de sol polarizadas",
      "descproducto": "Gafas de sol con lentes polarizadas para una visión clara",
      "colorproducto": ["Negro", "Azul", "Gris"],
      "fotoprinc": "https://w1.pngwing.com/pngs/47/44/png-transparent-light-blue-goggles-sunglasses-eyewear-carl-zeiss-ag-lens-polarized-light-personal-protective-equipment-line-angle.png",
      "precioproducto": 24,
      "disponibproducto": 60,
      "nombrecat": "accesorios"
    },
    {
      "nombreproducto": "Auriculares inalámbricos Bluetooth",
      "descproducto": "Auriculares inalámbricos con tecnología Bluetooth para una experiencia de audio sin cables",
      "colorproducto": ["Negro", "Blanco", "Rojo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/168/598/png-transparent-headphones-high-fidelity-philips-stereophonic-sound-black-headphones-electronics-black-hair-black-white.png",
      "precioproducto": 9,
      "disponibproducto": 50,
      "nombrecat": "electrónica"
    },
    {
    
      "nombreproducto": "Smartwatch",
      "descproducto": "Reloj inteligente con pantalla táctil y funciones de seguimiento de actividad y notificaciones de smartphone",
      "colorproducto": ["Negro", "Plateado", "Oro rosa"],
      "fotoprinc": "https://w7.pngwing.com/pngs/406/744/png-transparent-apple-watch-series-3-apple-watch-series-1-smartwatch-apple-gadget-electronics-apple-watch-thumbnail.png",
      "precioproducto": 14,
      "disponibproducto": 20,
      "nombrecat": "electrónica"
    },
    {
      "nombreproducto": "Cámara de acción 4K",
      "descproducto": "Cámara compacta de alta resolución para grabar videos en 4K y capturar imágenes en situaciones extremas.",
      "colorproducto": ["Negro", "Plata", "Rojo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/945/697/png-transparent-action-camera-sjcam-1080p-4k-resolution-sports-action-cam-camera-lens-video-camera-sports-thumbnail.png",
      "precioproducto": 19,
      "disponibproducto": 15,
      "nombrecat": "electrónica"
    },
    {
      "nombreproducto": "Router Wi-Fi de alta velocidad",
      "descproducto": "Router inalámbrico con tecnología avanzada que proporciona una conexión rápida y estable a Internet.",
      "colorproducto": ["Negro", "Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/778/512/png-transparent-wireless-router-wi-fi-internet-wireless-miscellaneous-computer-network-electronics-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "electrónica"
    },
    {
      "nombreproducto": "Altavoz inteligente con asistente virtual",
      "descproducto": "Altavoz con tecnología de voz asistida que te permite reproducir música, obtener información y controlar dispositivos inteligentes con comandos de voz",
      "colorproducto": ["Negro", "Gris", "Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/85/85/png-transparent-loudspeaker-wireless-speaker-jbl-boombox-audio-speaker-electronics-waterproofing-speaker-thumbnail.png",
      "precioproducto": 30,
      "disponibproducto": 25,
      "nombrecat": "electrónica"
    },
    {
      "nombreproducto": "Guitarra acústica",
      "descproducto": "Guitarra de cuerda de acero con cuerpo de madera y sonido cálido y resonante.",
      "colorproducto": ["Natural", "Negro", "Sunburst"],
      "fotoprinc": "https://w7.pngwing.com/pngs/878/764/png-transparent-brown-acoustic-guitar-acoustic-electric-guitar-takamine-guitars-acoustic-guitar-dreadnought-acoustic-guitar-pickup-guitar-accessory-cuatro-thumbnail.png",
      "precioproducto": 300,
      "disponibproducto": 10,
      "nombrecat": "instrumentos"
    },
    {
      "nombreproducto": "Micrófono de condensador",
      "descproducto": "Micrófono de alta calidad para grabaciones vocales y de instrumentos con una reproducción precisa del sonido.",
      "colorproducto": ["Negro", "Plateado", "Oro rosa"],
      "fotoprinc": "https://w7.pngwing.com/pngs/240/87/png-transparent-microphone-lauten-audio-condensatormicrofoon-diaphragm-sound-audio-studio-microphone-electronics-studio-recording-studio-thumbnail.png",
      "precioproducto": 150,
      "disponibproducto": 15,
      "nombrecat": "instrumentos"
    },
    {
      "nombreproducto": "Teclado digital",
      "descproducto": "Teclado electrónico con múltiples voces y funciones de acompañamiento para crear música y aprender a tocar.",
      "colorproducto": ["Negro", "Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/638/243/png-transparent-keyboard-musical-instruments-korg-music-workstation-sound-yamaha-electronics-piano-digital-piano-thumbnail.png",
      "precioproducto": 400,
      "disponibproducto": 8,
      "nombrecat": "instrumentos"
    },
    {
     
      "nombreproducto": "Mezclador de DJ",
      "descproducto": "Mesa de mezclas para DJ con controles precisos y opciones de efectos para crear y mezclar música en vivo",
      "colorproducto": ["Negro", "Plata"],
      "fotoprinc": "https://w7.pngwing.com/pngs/275/818/png-transparent-pioneer-dj-dj-controller-pioneer-ddj-sx2-disc-jockey-dj-machine-electronics-sound-disc-jockey-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "instrumentos"
    },
    {
      "nombreproducto": "Juego de cuchillos de chef",
      "descproducto": "Juego de cuchillos de alta calidad, incluye cuchillo de chef, cuchillo para pan y cuchillo para pelar",
      "colorproducto": ["Negro", "Plateado"],
      "fotoprinc": "https://img1.freepng.es/20180318/jsq/kisspng-knife-tool-kitchen-knives-variety-of-tools-5aae8727c57a53.3521800815213873038089.jpg",
      "precioproducto": 9,
      "disponibproducto": 20,
      "nombrecat": "cocina"
    },
    {
      "nombreproducto": "Olla de cocción lenta",
      "descproducto": "Olla eléctrica de cocción lenta para preparar comidas deliciosas y saludables con facilidad.",
      "colorproducto": ["Negro", "Rojo", "Blanco"],
      "fotoprinc": "https://img1.freepng.es/20180522/soc/kisspng-russell-hobbs-rice-cookers-toaster-home-appliance-5b0397550c4ee6.6099903615269620050504.jpg",
      "precioproducto": 80,
      "disponibproducto": 15,
      "nombrecat": "cocina"
    },
    {
      "nombreproducto": "Batidora de pie",
      "descproducto": "Batidora de pie con múltiples velocidades y accesorios para mezclar, amasar y batir ingredientes",
      "colorproducto": ["Negro", "Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/859/259/png-transparent-red-kitchenaid-stand-mixer-kitchenaid-mixer-bowl-blender-mixer-miscellaneous-kitchen-kitchen-appliance-thumbnail.png",
      "precioproducto": 15,
      "disponibproducto": 10,
      "nombrecat": "cocina"
    },
    {
      "nombreproducto": "Cafetera de espresso",
      "descproducto": "Cafetera de espresso semiautomática para preparar café con una crema rica y aromática en casa",
      "colorproducto": ["Negro", "Acero inoxidable"],
      "fotoprinc": "https://img1.freepng.es/20180325/lgq/kisspng-coffee-nespresso-kitchenaid-espresso-machines-coffee-machine-5ab720cebc1f64.4457957715219509267706.jpg",
      "precioproducto": 20,
      "disponibproducto": 8,
      "nombrecat": "cocina"
    },
    {
      "nombreproducto": "Sofá seccional",
      "descproducto": "Sofá espacioso en forma de L con cojines acolchados y tapizado de alta calidad para el salón",
      "colorproducto": ["Gris", "Beige", "Marrón"],
      "fotoprinc": "https://w7.pngwing.com/pngs/485/173/png-transparent-table-couch-sofa-bed-furniture-seat-corner-sofa-angle-furniture-textile-thumbnail.png",
      "precioproducto": 90,
      "disponibproducto": 10,
      "nombrecat": "hogar"
    },
    {
      "nombreproducto": "Mesa de comedor extensible",
      "descproducto": "Mesa de comedor con capacidad para extenderse y adaptarse a diferentes tamaños de reuniones familiares o eventos",
      "colorproducto": ["Blanco", "Negro", "Marrón"],
      "fotoprinc": "https://w7.pngwing.com/pngs/478/342/png-transparent-folding-tables-picnic-table-chair-buffet-table-angle-furniture-rectangle-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "hogar"
    },
    {
      "nombreproducto": "Estantería modular",
      "descproducto": "Estantería versátil con módulos interconectables para organizar libros, decoraciones y objetos en el hogar.",
      "colorproducto": ["Blanco", "Negro", "Madera natural"],
      "fotoprinc": "https://w7.pngwing.com/pngs/604/98/png-transparent-floating-shelf-wall-wood-living-room-shelf-angle-kitchen-furniture-thumbnail.png",
      "precioproducto": 20,
      "disponibproducto": 20,
      "nombrecat": "hogar"
    },
    {
      "nombreproducto": "Cama de plataforma",
      "descproducto": "Cama elegante de plataforma con cabecero acolchado y almacenamiento integrado en la base.",
      "colorproducto": ["Gris", "Beige", "Marrón"],
      "fotoprinc": "https://w7.pngwing.com/pngs/578/783/png-transparent-daybed-bedside-tables-trundle-bed-couch-bed-thumbnail.png",
      "precioproducto": 80,
      "disponibproducto": 8,
      "nombrecat": "hogar"
    },
    {
      "nombreproducto": "Lámpara de pie moderna",
      "descproducto": "Lámpara de pie con diseño contemporáneo y luz regulable para iluminar cualquier espacio del hogar.",
      "colorproducto": ["Negro", "Plateado", "Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/285/255/png-transparent-gray-floor-lamp-with-drum-brown-lampshade-lampe-de-bureau-light-white-minimalist-standing-lamp-light-fixture-angle-simple-thumbnail.png",
      "precioproducto": 15,
      "disponibproducto": 12,
      "nombrecat": "hogar"
    },
    {
      "nombreproducto": "Taladro percutor",
      "descproducto": "Taladro eléctrico con función de percusión para perforar materiales duros como concreto y mampostería.",
      "colorproducto": ["Amarillo", "Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/38/316/png-transparent-augers-robert-bosch-gmbh-hammer-drill-tool-chuck-austria-drill-miscellaneous-screwdriver-drill-thumbnail.png",
      "precioproducto": 100,
      "disponibproducto": 20,
      "nombrecat": "construcción"
    },
    {
      "nombreproducto": "Nivel láser",
      "descproducto": "Herramienta de medición láser para asegurar una nivelación precisa en proyectos de construcción y renovación.",
      "colorproducto": ["Rojo", "Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/941/563/png-transparent-laser-levels-dewalt-laser-line-laser-laser-line-level-others-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BD%D0%B8%D0%B2%D0%B5%D0%BB%D0%B8%D1%80-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-yellow-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "construcción"
    },
    {
      "nombreproducto": "Sierra circular",
      "descproducto": "Sierra eléctrica portátil para realizar cortes precisos en madera, plástico y otros materiales de construcción.",
      "colorproducto": ["Negro", "Azul"],
      "fotoprinc": "https://w7.pngwing.com/pngs/287/907/png-transparent-hand-tool-circular-saw-power-tool-circular-saw-angle-grinder-saw-robert-bosch-gmbh-thumbnail.png",
      "precioproducto": 130,
      "disponibproducto": 10,
      "nombrecat": "construcción"
    },
    {
      "nombreproducto": "Cinta métrica retráctil",
      "descproducto": "Cinta métrica de acero retráctil para medir distancias y dimensiones en proyectos de construcción.",
      "colorproducto": ["Amarillo", "Plateado"],
      "fotoprinc": "https://w7.pngwing.com/pngs/893/1004/png-transparent-tape-measures-stanley-hand-tools-stanley-fatmax-others-miscellaneous-measurement-foot-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "construcción"
    },
    {
      "nombreproducto": "Martillo de construcción",
      "descproducto": "Martillo de mano resistente con cabezal de acero y mango antideslizante para tareas de demolición y construcción.",
      "colorproducto": ["Rojo", "Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/372/479/png-transparent-framing-hammer-hammer-handle-hammer-stockxchng-thumbnail.png",
      "precioproducto": 10,
      "disponibproducto": 20,
      "nombrecat": "construcción"
    },
    {
      "nombreproducto": "Pan",
      "descproducto": "Pan recién hecho",
      "colorproducto": ["Unico"],
      "fotoprinc": "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
      "precioproducto": 8,
      "disponibproducto": 100,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Manzana",
      "descproducto": "Fruta fresca y jugosa, rica en vitaminas y fibra",
      "colorproducto": ["Rojo", "Verde", "Amarillo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/736/5/png-transparent-sugar-apple-graphy-fruit-desktop-apple-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 100,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Zanahoria",
      "descproducto": "Hortaliza crujiente y nutritiva, ideal para ensaladas y guisos",
      "colorproducto": ["Naranja"],
      "fotoprinc": "https://w7.pngwing.com/pngs/517/983/png-transparent-two-orange-carrots-baby-carrot-carrot-natural-foods-leaf-vegetable-food-thumbnail.png",
      "precioproducto": 1,
      "disponibproducto": 80,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Plátano",
      "descproducto": "Fruta tropical dulce y energética, perfecta como snack o para batidos",
      "colorproducto": ["Amarillo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/675/836/png-transparent-banana-juice-cavendish-banana-fruit-eating-delicious-delicious-banana-food-tropical-fruit-eating-thumbnail.png",
      "precioproducto": 1,
      "disponibproducto": 120,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Sandía",
      "descproducto": "Fruta refrescante y jugosa, ideal para el verano",
      "colorproducto": ["Verde", "Rojo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/389/21/png-transparent-sliced-of-watermelon-seedless-fruit-sun-melon-juice-watermelon-natural-foods-food-melon-thumbnail.png",
      "precioproducto": 3,
      "disponibproducto": 40,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Lechuga",
      "descproducto": "Verdura de hojas verdes y crujientes, perfecta para ensaladas",
      "colorproducto": ["Verde"],
      "fotoprinc": "https://w7.pngwing.com/pngs/18/437/png-transparent-green-lettuce-leaf-vegetable-salad-butterhead-lettuce-iceberg-lettuce-romaine-lettuce-product-food-eating-chili-pepper-thumbnail.png",
      "precioproducto": 1,
      "disponibproducto": 60,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Naranja",
      "descproducto": "Cítrico jugoso y vitamínico, ideal para zumos y postres",
      "colorproducto": ["Naranja"],
      "fotoprinc": "https://w7.pngwing.com/pngs/792/34/png-transparent-orange-juice-tangerine-bitter-orange-fruit-orange-natural-foods-food-orange-thumbnail.png",
      "precioproducto": 1,
      "disponibproducto": 90,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Pimiento rojo",
      "descproducto": "Hortaliza de sabor dulce y color intenso, perfecto para asar o agregar a platos",
      "colorproducto": ["Rojo"],
      "fotoprinc": "https://w7.pngwing.com/pngs/170/990/png-transparent-vegetable-red-bell-pepper-food-auglis-vegetable-natural-foods-food-nutrition-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 70,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Uvas",
      "descproducto": "Fruta pequeña y dulce, ideal para disfrutar como snack o en ensaladas",
      "colorproducto": ["Verde", "Morado"],
      "fotoprinc": "https://w7.pngwing.com/pngs/302/717/png-transparent-common-grape-vine-grape-leaves-grape-seed-extract-must-grape-food-blueberry-grape-thumbnail.png",
      "precioproducto": 3,
      "disponibproducto": 50,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Cebolla",
      "descproducto": "Hortaliza de sabor fuerte y versátil, fundamental en muchas recetas",
      "colorproducto": ["Blanco", "Amarillo", "Morado"],
      "fotoprinc": "https://w7.pngwing.com/pngs/1023/22/png-transparent-red-onion-yellow-onion-white-onion-french-onion-soup-onions-natural-foods-food-image-file-formats-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 100,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Pan integral",
      "descproducto": "Pan elaborado con harina integral, rico en fibra y nutrientes",
      "colorproducto": ["Marrón"],
      "fotoprinc": "https://w7.pngwing.com/pngs/467/548/png-transparent-pita-whole-wheat-bread-whole-grain-nutrition-bread-baked-goods-food-baking-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 30,
      "nombrecat": "alimentos"
    },
    {
      "nombreproducto": "Crema facial hidratante",
      "descproducto": "Crema hidratante para el rostro que proporciona hidratación y nutrición intensa",
      "colorproducto": ["Blanco"],
      "fotoprinc": "https://w7.pngwing.com/pngs/782/487/png-transparent-lotion-nivea-soft-moisturizing-cream-nivea-soft-moisturizing-cream-moisturizer-nivea-cream-cream-cosmetics-material-thumbnail.png",
      "precioproducto": 19,
      "disponibproducto": 50,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Mascarilla de arcilla",
      "descproducto": "Mascarilla facial de arcilla purificante que ayuda a limpiar los poros y mejorar la apariencia de la piel",
      "colorproducto": ["Gris"],
      "fotoprinc": "https://w7.pngwing.com/pngs/120/568/png-transparent-lotion-facial-exfoliation-skin-care-chemical-peel-gold-element-cream-face-people-thumbnail.png",
      "precioproducto": 9,
      "disponibproducto": 30,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Esmalte de uñas",
      "descproducto": "Esmalte de uñas de larga duración con una amplia gama de colores y acabados",
      "colorproducto": ["Rojo", "Rosa", "Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/28/586/png-transparent-five-glass-bottles-chanel-nail-polish-nail-art-cosmetics-nail-polish-bottle-glass-chanel-color-thumbnail.png",
      "precioproducto": 4,
      "disponibproducto": 100,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Sombra de ojos",
      "descproducto": "Sombra de ojos altamente pigmentada para crear looks de maquillaje llamativos",
      "colorproducto": ["Dorado", "Marrón", "Azul"],
      "fotoprinc": "https://w7.pngwing.com/pngs/407/655/png-transparent-eye-shadow-cosmetics-make-up-eyelash-extensions-makeup-palette-cosmetics-color-palette-thumbnail.png",
      "precioproducto": 7,
      "disponibproducto": 80,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Lápiz labial",
      "descproducto": "Lápiz labial de larga duración con colores vibrantes y acabado hidratante",
      "colorproducto": ["Rojo", "Rosa", "Nude"],
      "fotoprinc": "https://w7.pngwing.com/pngs/191/219/png-transparent-mac-lipstick-lipstick-mac-cosmetics-lipstick-miscellaneous-cosmetics-product-thumbnail.png",
      "precioproducto": 6,
      "disponibproducto": 70,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Perfume floral",
      "descproducto": "Perfume con una fragancia floral suave y femenina",
      "colorproducto": ["Transparente"],
      "fotoprinc": "https://w7.pngwing.com/pngs/706/770/png-transparent-christian-dior-se-perfume-eau-de-toilette-chanel-cosmetics-perfume-miscellaneous-perfume-bottle-woman-thumbnail.png",
      "precioproducto": 29,
      "disponibproducto": 40,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Brochas de maquillaje",
      "descproducto": "Set de brochas de maquillaje profesionales para una aplicación precisa y suave",
      "colorproducto": ["Negro", "Plateado"],
      "fotoprinc": "https://w7.pngwing.com/pngs/254/977/png-transparent-cosmetics-makeup-brush-paintbrush-make-up-maquillage-cosmetics-makeup-brush-makeup-brushes-thumbnail.png",
      "precioproducto": 12,
      "disponibproducto": 60,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Shampoo nutritivo",
      "descproducto": "Champú que nutre y fortalece el cabello, dejándolo suave y brillante",
      "colorproducto": ["Transparente"],
      "fotoprinc": "https://w7.pngwing.com/pngs/386/235/png-transparent-head-shoulders-classic-clean-shampoo-head-shoulders-classic-clean-shampoo-hair-conditioner-dandruff-shampoo-thumbnail.png",
      "precioproducto": 8,
      "disponibproducto": 90,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Máscara de pestañas",
      "descproducto": "Máscara de pestañas que proporciona volumen y longitud para unas pestañas impactantes",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/931/466/png-transparent-maybelline-lash-sensational-washable-mascara-eyelash-maybelline-lash-sensational-luscious-washable-mascara-mascara-cosmetics-black-brush-thumbnail.png",
      "precioproducto": 5,
      "disponibproducto": 50,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Gel de ducha hidratante",
      "descproducto": "Gel de ducha con fórmula hidratante que limpia suavemente la piel sin resecarla",
      "colorproducto": ["Transparente"],
      "fotoprinc": "https://w7.pngwing.com/pngs/994/803/png-transparent-shower-gel-nivea-lotion-perfume-cream-perfume-miscellaneous-cream-perfume-thumbnail.png",
      "precioproducto": 4,
      "disponibproducto": 120,
      "nombrecat": "belleza"
    },
    {
      "nombreproducto": "Cuaderno de notas",
      "descproducto": "Cuaderno de notas con tapa dura y hojas rayadas",
      "colorproducto": ["Azul", "Rojo", "Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/690/988/png-transparent-three-black-maroon-and-blue-spiral-books-art-hardcover-standard-paper-size-notebook-ring-binder-notebook-s-miscellaneous-spiral-wire-notebook-notebook-cover-thumbnail.png",
      "precioproducto": 5,
      "disponibproducto": 50,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Bolígrafos de colores",
      "descproducto": "Set de bolígrafos de colores variados",
      "colorproducto": ["Varios"],
      "fotoprinc": "https://w7.pngwing.com/pngs/1007/680/png-transparent-ballpoint-pen-pen-pencil-cases-machine-5-color-ballpoint-pen-color-splash-pencil-color-pencil-thumbnail.png",
      "precioproducto": 3,
      "disponibproducto": 100,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Lápices HB",
      "descproducto": "Lápices de grafito de dureza HB",
      "colorproducto": ["Gris"],
      "fotoprinc": "https://w7.pngwing.com/pngs/770/946/png-transparent-five-assorted-colored-pencils-illustration-pencil-hb-pencils-set-tshirt-school-clipart-fruit-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 150,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Marcadores resaltadores",
      "descproducto": "Set de marcadores resaltadores de colores vibrantes",
      "colorproducto": ["Varios"],
      "fotoprinc": "https://w7.pngwing.com/pngs/122/505/png-transparent-highlighter-stain-paper-marker-pen-marker-pen-ink-textile-color-thumbnail.png",
      "precioproducto": 4,
      "disponibproducto": 80,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Cinta adhesiva",
      "descproducto": "Rollo de cinta adhesiva transparente",
      "colorproducto": ["Transparente"],
      "fotoprinc": "https://w7.pngwing.com/pngs/948/884/png-transparent-adhesive-tape-box-sealing-tape-paper-scotch-tape-others-miscellaneous-material-packaging-and-labeling-thumbnail.png",
      "precioproducto": 1,
      "disponibproducto": 200,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Calculadora científica",
      "descproducto": "Calculadora científica con funciones avanzadas",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/560/55/png-transparent-casio-fx85gtplus-scientific-calculator-260-functions-dual-power-t-calculadora-cientifica-fx-85ms-casio-calculator-electronics-calculator-casio-fx300es-plus-thumbnail.png",
      "precioproducto": 12,
      "disponibproducto": 30,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Grapadora",
      "descproducto": "Grapadora metálica para uso en oficina",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/936/364/png-transparent-stapler-office-supplies-stationery-officemax-others-office-steel-stationery-thumbnail.png",
      "precioproducto": 6,
      "disponibproducto": 70,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Pegamento en barra",
      "descproducto": "Barra de pegamento sin solventes",
      "colorproducto": ["Transparente"],
      "fotoprinc": "https://w7.pngwing.com/pngs/121/394/png-transparent-paper-glue-stick-adhesive-stationery-pritt-box-miscellaneous-aerosol-spray-stationery-thumbnail.png",
      "precioproducto": 2,
      "disponibproducto": 120,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Archivador de documentos",
      "descproducto": "Archivador de documentos con anillas",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/613/15/png-transparent-paper-stationery-file-folders-document-desk-accessories-visiting-card-file-folders-stationery-thumbnail.png",
      "precioproducto": 8,
      "disponibproducto": 40,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Carpeta de presentación",
      "descproducto": "Carpeta de presentación con bolsillos transparentes",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/417/990/png-transparent-plastic-file-folders-envelope-presentation-folder-stationery-envelope-miscellaneous-rectangle-sticker-thumbnail.png",
      "precioproducto": 3,
      "disponibproducto": 60,
      "nombrecat": "papelería"
    },
    {
      "nombreproducto": "Tijeras de oficina",
      "descproducto": "Tijeras de acero inoxidable para uso en oficina",
      "colorproducto": ["Negro"],
      "fotoprinc": "https://w7.pngwing.com/pngs/213/506/png-transparent-tailor-scissors-icon-tailor-scissors-textile-technic-rock-paper-scissors-thumbnail.png",
      "precioproducto": 4,
      "disponibproducto": 90,
      "nombrecat": "papelería"
    }

        ]
    

function handleClick(e){
  arrayObjetos.forEach(objeto=>{
    axios.post("/productoCrear", objeto)
  })
  
}

function handleClickRevs(e){
  const arrayRevs = []
  for(let i= 1; i<15; i++){
    for(let j= 1; j<5; j++){

      var rating = Math.floor(Math.random()*5)+1
      var description = "meh"
      if(rating === 1) description = "Muy malo"
      if(rating === 3) description = "Normal"
      if(rating === 5) description = "Muy bueno "
      var review = {
        productoId: i,
        usuarioId: j,
        description: description,
        rating: rating
      }
      axios.post("/review", review)
      arrayRevs.push(review)
    }
  }
  
    alert(arrayRevs)
}

  return (
    <div>
      <button onClick={handleClick}>arrayObjetos</button>
      <button onClick={handleClickRevs}>Cargar reviews</button>
      </div>

  )
}
