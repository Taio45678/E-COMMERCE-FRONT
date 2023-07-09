import React, { useEffect, useState } from "react";
import s from "./Total.module.css";
<<<<<<< HEAD
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('TEST-6150df70-606f-4169-971b-dff2a6c919b6');
=======
import { useAuth0 } from "@auth0/auth0-react";
>>>>>>> f99c9794fc7022f4c0193958b771c136168c9a58

export default function Total({ productos }) {

  const {isAuthenticated, loginWithRedirect} = useAuth0();

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
<<<<<<< HEAD
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
=======
      //Chequeamos si está logeado el usuario
      if(isAuthenticated){

        // Realizar una solicitud al backend para obtener la URL de pago de Mercado Pago
        const response = await fetch("http://localhost:3000/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productos }),
        });

        if (response.ok) {
          const data = await response.json();
          // Redirigir al usuario a la URL de pago proporcionada por el backend
          window.location.href = data.init_point;
        } else {
          console.log("Error al crear la orden de pago");
        }
    } else {
      loginWithRedirect()
    }
>>>>>>> f99c9794fc7022f4c0193958b771c136168c9a58
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

// import MercadoPago from 'mercadopago';


// const mercadopago = new MercadoPago("TEST-6150df70-606f-4169-971b-dff2a6c919b6", {
//   locale: "es-AR" // The most common are: 'pt-BR', 'es-AR' and 'en-US'
// });


// document.getElementById("checkout-btn").addEventListener("click", function () {
//   const orderData = {
//     quantity: document.getElementById("quantity").innerHTML,
//     description: document.getElementById("product-description").innerHTML,
//     price: document.getElementById("unit-price").innerHTML,
//   };

//   fetch("http://localhost:8080/create_preference", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (preference) {
//       createCheckoutButton(preference.id);
//     })
//     .catch(function () {
//       alert("Unexpected error");
//     });
// });

// function createCheckoutButton(preferenceId) {
//   // Initialize the checkout
//   const bricksBuilder = mercadopago.bricks();

//   const renderComponent = async (bricksBuilder) => {
//     if (window.checkoutButton) window.checkoutButton.unmount();
//     await bricksBuilder.create(
//       "wallet",
//       "button-checkout", // class/id where the payment button will be displayed
//       {
//         initialization: {
//           preferenceId: preferenceId,
//         },
//         callbacks: {
//           onError: (error) => console.error(error),
//           onReady: () => {},
//         },
//       }
//     );
//   };
//   window.checkoutButton = renderComponent(bricksBuilder);
// }
