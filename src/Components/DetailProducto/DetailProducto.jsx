import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
// import GalaxyNote from "../../Archivos pruebas/galaxy note 10.jpg";
import s from "./DetailProducto.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ProductosDtl from "./Productos/ProductosDtl";
import Pago from "./Pagos/Pagos";
import Descripcion from "./Descripcion/Descripcion";
import {
  getDetail,
  addCarrito,
  getAllProducts,
} from "../../Redux/actions";
import ReviewCard from "../Reviews/ReviewCard";
// import { TroubleshootRounded } from "@mui/icons-material";

//Aquí se renderiza el detalle de cada producto

export default function DetailProducto() {
  // Las CALIFICACIONES sera un array acumulativo de estreñas x compras del producto
  

  let { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const elCarrito = useSelector((state) => state.carrito);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true)
 
  
  console.log(elCarrito);

  

  useEffect(() => {
    dispatch(getDetail(id));
    if(productos.length < 10)dispatch(getAllProducts(1))
    setCargando(false)
  }, [dispatch, id]);
  

const productDetails = useSelector((state) => state.details);
const productos = useSelector((state)=>state.allProducts)

  if(cargando){
    return <p>Cargando</p>
  }

  const {
    nombreproducto,
    descproducto,
    colorproducto,
    fotoprinc,
    precioproducto,
    disponibproducto,
    nombrecat,
    reviews
  } = productDetails;



  // //######### OBTENER EL VALOR DE LA REVIEW###########
  const lengthReviews = reviews?.length
  const arrayReview = []
  reviews?.forEach(review => {
    arrayReview.push(review.rating)
  });
  const suma = arrayReview.reduce((ac, nu)=> ac+nu, 0)
  const calificacion = suma/arrayReview.length
 

  // //########### EL HANDLE DE AGREGAR PRODUCTO AL CARRITO ##############
  function handleSubmit(e) {
    e.preventDefault();
    const productToAdd = {
      id: id,
      nombre: nombreproducto,
      precio: precioproducto,
      cantidad: 1,
      imagen: fotoprinc,
    };
    dispatch(addCarrito(productToAdd));
    alert(`Agregaste el producto ${nombreproducto} a tu carrito`);
  }

  

  return (
    <div>
      
    <div className={s.fondo}>
    <form action="" onSubmit={handleSubmit} className={s.fromu}>
        <div className={s.producto}>Detalles del producto</div>
        <div className={s.cajaInterna}>
          <div className={s.cajaImagen}>
            <div className={s.imagenPosition}>
              <img
                src={fotoprinc}
                alt="image not found"
                className={s.imagen}
              ></img>
            </div>
            <div className={s.linea}></div>
            <h1>Descripcion :</h1>
            <Descripcion descripcion={descproducto}></Descripcion>
          </div>
          <div className={s.datos}>
            <h1>{productDetails.nombreproducto}</h1>
            <h4>
              Categoria : <h5 style={{ color: "red" }}>{nombrecat}</h5>
            </h4>

            <h2>{nombreproducto}</h2>
            <p>${precioproducto}</p>

            {/* ###############  Boton para mostrar que tarjetas acepta All Market ################# */}

            <Pago></Pago>
            <h4>Color: {colorproducto?.join(", ")}</h4>
            <h4>Stock disponible:{disponibproducto}</h4>

            {/* ###############  BOTON DEL CARRITO ################# */}

            <button type="submit" className={s.agregar}>
              Agregar al carrito
            </button>

            <h3>Calificaciones:</h3>
            {/* ###############   Deberan ser mapeadar cada calificacion ################# */}
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend"></Typography>
              <Rating
                name="read-only"
                value={calificacion}
                readOnly
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
        </form>
      
        <Box>
        {reviews && reviews.length === 0 ? (<h3>Este producto aun no tiene reviews</h3>):
        (<div style={{display: 'flex'}}>
          {reviews && reviews.length >= 3 && (
            <>
             <ReviewCard usuarioId={reviews[reviews.length-1].usuarioId} description={reviews[reviews.length-1].description} rating={reviews[reviews.length-1].rating} createdAt={reviews[reviews.length-1].createdAt}></ReviewCard>
            <ReviewCard usuarioId={reviews[reviews.length-2].usuarioId} description={reviews[reviews.length-2].description} rating={reviews[reviews.length-2].rating} createdAt={reviews[reviews.length-2].createdAt}></ReviewCard>
            <ReviewCard usuarioId={reviews[reviews.length-3].usuarioId} description={reviews[reviews.length-3].description} rating={reviews[reviews.length-3].rating} createdAt={reviews[reviews.length-3].createdAt}></ReviewCard>
            </>)}
        </div>)}
        </Box>
        <div>
         
       {productos && productos.length > 0 && (<>
        <ProductosDtl style={{ marginTop: '10px', marginBottom: '20px', marginRight: '20px', marginLeft: '20px'}} productos= {productos}  />
       </>)
       }
        
        </div>
    </div>
    </div>
  );
}
