import React from "react";
import s from "./Seleccion.module.css";

export default function Seleccion({ pokes, updateQuantity, deleteProduct }) {
  const { id, nombre, imagen, cantidad, precio } = pokes;

  const handleIncrement = () => {
    // Verificar límite máximo de cantidad
    if (cantidad < 10) {
      // Incrementar la cantidad del producto
      updateQuantity(id, cantidad + 1);
    }
  };

  const handleDecrement = () => {
    // Verificar límite mínimo de cantidad
    if (cantidad > 1) {
      // Decrementar la cantidad del producto
      updateQuantity(id, cantidad - 1);
    }
  };

  const handleDelete = () => {
    // Eliminar el producto del carrito
    deleteProduct(id);
  };

  const precioTotal = cantidad * precio; // Calcula el precio total

  return (
    <div className={s.fondo}>
      <div className={s.cajaImagen}>
        <img src={imagen} alt="" className={s.imagen} />
      </div>
      <div className={s.caja2}>
        <h1>{nombre}</h1>
        <button className={s.eliminar} onClick={handleDelete}>
          Eliminar
        </button>
      </div>
      <div className={s.cantidad}>
        <div className={s.botones}>
          <button onClick={handleDecrement}>-</button>
          {cantidad}
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <div className={s.precio}>${precioTotal}</div>
      <div className={s.separador}></div>
    </div>
  );
}
