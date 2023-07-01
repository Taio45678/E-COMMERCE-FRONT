import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GalaxyNote from "../../Archivos pruebas/galaxy note 10.jpg";
import s from "./DetailProducto.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ProductosDtl from "./Productos/ProductosDtl";
//Aquí se renderiza el detalle de cada producto
import Pago from "./Pagos/Pagos";
//import { addCarrito } from "../../Redux/actions";

export default function DetailProducto() {
  // Las CALIFICACIONES sera un array acumulativo de estreñas x compras del producto
  const [value, setValue] = React.useState(3);

  let { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.details);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(addCarrito(id));
  //   alert(`Agregaste a tu carrito ${id.name}`)
  // }

  return (
    <div className={s.fondo}>
      <div className={s.producto}>Detalles del producto</div>
      <div className={s.cajaInterna}>
        <div className={s.cajaImagen}>
          <div className={s.imagenPosition}>
            <img
              src={GalaxyNote}
              alt="image not found"
              className={s.imagen}
            ></img>
          </div>
          <div className={s.linea}></div>
          <h1>Descripcion :</h1>
          <h4>
            Modelo de marcaSamsung Galaxy Note10 + N9750 / Note 10 PlusSistemaSO
            Android 9.0CPU Qualcomm Snapdragon 855 Octa Core 2.8GHzGPU Adreno
            640RAM 12 GBROM 256 GBExtend card MAX admite tarjeta de memoria
            Micro SD clase 10 de 512 GB (tarjeta TF)PantallaTamaño de pantalla
            Quad HD + de 6,8 pulgadasResolución de pantalla 3040 x 1440Tipo de
            pantalla Corning Gorilla GlassDimensiones 162,3x77,2x7,9mmPeso neto
            198gCámaraCámara frontal 10.0 megapíxelesCámara trasera 12.0
            megapíxeles 12.0 megapíxeles 16.0 megapíxeles Cámara de tres lentes
          </h4>
        </div>
        <div className={s.datos}>
          <h1>{productDetails.name}</h1>
          <h1>Nombre Usuario</h1>
          <h2>Producto Aleatorio</h2>
          <p>$250</p>
          <Pago></Pago>
          <h4>Color:Rojo</h4>
          <button className={s.agregar}>Agregar al carrito</button>
          <h3>Calificaciones:</h3>
          {/* Deberan ser mapeadar cada calificacion  */}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <a
            href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwtO-kBhDIARIsAL6LorcDR-GnZb0eUPEkd6yyO2cXte6yEokKM93fcVlckILE3eU0a3JxTB8aAht3EALw_wcB"
            target="_blank"
          >
            <div className={s.propaganda}></div>
          </a>
        </div>
      </div>
      <div className={s.productos5}>
        <ProductosDtl />
      </div>
    </div>
  );
}
