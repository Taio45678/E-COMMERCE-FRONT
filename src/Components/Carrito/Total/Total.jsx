import React, { useEffect, useState } from "react";
import s from "./Total.module.css";
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('TEST-6150df70-606f-4169-971b-dff2a6c919b6');

export default function Total({ productos }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      for (const producto of productos) {
        sum += producto.precio * producto.cantidad;
      }
      setTotal(sum);
    };

    calculateTotal();
  }, [productos]);

  const redirectToMercadoPago = async () => {
    try {
      const response = await fetch("http://localhost:3000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productos }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.init_point;
      } else {
        console.log("Error al crear la orden de pago");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className={s.fondo}>
        <div className={s.titulo}>Sumatoria</div>
        <div className={s.total}>
          <h1>Total</h1>
          <p>${total}</p>
        </div>
        <button id="comprar-btn" className={s.button} onClick={redirectToMercadoPago}>
          <span>Comprar</span>
        </button>
      </div>
  );
}

