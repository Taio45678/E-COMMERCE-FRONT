import React from "react";
import s from "./ProductosDtl.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Productos() {
const arrayRandom = []
const {allProducts} = useSelector((state) => state)
const navigate = useNavigate()

function generarNumeroAleatorio() {
  for(let i = 0; i<5;i++){
  arrayRandom.push(Math.floor(Math.random() * 10));
  }
}
function handleClickOtro(num){
  navigate(`/detailProducto/${num}`)
}
generarNumeroAleatorio();

  return (
    <div className={s.caja2}>
      <div className={s.cajaInterna2}>
        
        {arrayRandom?.map(num => (
           <div className={s.productos}>
           <div className={s.cajaImagen}>
             <img src={allProducts[num].fotoprinc} width={"100%"} heigth={"200 px"}style={{maxHeight: '100%'}}></img>
           </div>
           <div className={s.titulo}>{allProducts[num].nombreproducto}</div>
           <div className={s.precio}>
             <h3>${allProducts[num].precioproducto}</h3>
           </div>
           <button style ={{cursor: 'pointer'}} className={s.verMas} onClick={()=>handleClickOtro(allProducts[num].id)}>Ver Mas</button>
         </div>
      ))}
        {/* <div className={s.productos}>
          <div className={s.cajaImagen}>
            <div>image</div>
          </div>
          <div className={s.titulo}>Producto Aleatorio</div>
          <div className={s.precio}>
            <h3>{allProducts.length}</h3>
          </div>
          <button className={s.verMas}>Ver Mas</button>
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <div>image</div>
          </div>
          <div className={s.titulo}>Producto Aleatorio</div>
          <div className={s.precio}>
            <h3>$000</h3>
          </div>
          <button className={s.verMas}>Ver Mas</button>
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <div>image</div>
          </div>
          <div className={s.titulo}>Producto Aleatorio</div>
          <div className={s.precio}>
            <h3>$000</h3>
          </div>
          <button className={s.verMas}>Ver Mas</button>
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <div>image</div>
          </div>
          <div className={s.titulo}>Producto Aleatorio</div>
          <div className={s.precio}>
            <h3>$000</h3>
          </div>
          <button className={s.verMas}>Ver Mas</button>
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <div>image</div>
          </div>
          <div className={s.titulo}>Producto Aleatorio</div>
          <div className={s.precio}>
            <h3>$000</h3>
          </div>
          <button className={s.verMas}>Ver Mas</button>
        </div> */}
      </div>
    </div>
  );
}
