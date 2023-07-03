import React, { useState } from "react";
import Total from "../Total/Total";
import s from "./Carrito.module.css";
import Mensaje from "../Mensaje/Mensaje";
import Seleccion from "../Seleccion/Seleccion";
import { useSelector } from "react-redux";

const Carrito = () => {
  let elCarrito = useSelector((state) => state.carrito);
  const [productos, setProductos] = useState(elCarrito);

  const updateQuantity = (id, quantity) => {
    const updatedProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: quantity };
      }
      return producto;
    });
    setProductos(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = productos.filter((producto) => producto.id !== id);
    setProductos(updatedProducts);
  };

  return (
    <div>
      <div className={s.fondo}>
        <div className={s.caja}>
          <div className={s.fondo2}>
            <div className={s.titulo}>
              <h1>Carrito</h1>
              <p>Precio</p>
            </div>

            {productos.length === 0 ? (
              <Mensaje></Mensaje>
            ) : (
              productos?.map((producto) => (
                <Seleccion
                  key={producto.id}
                  pokes={producto}
                  updateQuantity={updateQuantity}
                  deleteProduct={deleteProduct}
                />
              ))
            )}
          </div>
          <Total productos={productos} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Carrito;
