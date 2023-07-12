import React, { useEffect, useState } from "react";
import s from "./Total.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { initMercadoPago } from '@mercadopago/sdk-react'
import { useDispatch } from 'react-redux';
import { limpiarCarrito,reinicia_store } from '../../../Redux/actions.js'; 
import { getAllCategorias, getAllProducts } from '../../../Redux/actions';
import axios from "axios";
import Modal from "react-modal";

initMercadoPago('TEST-6150df70-606f-4169-971b-dff2a6c919b6');
Modal.setAppElement("#root");
export function showMessage(message, url) {
 const link = <a href={url}>{url}</a>;
 alert(
   <div>
     <p>{message}</p>
     {link}
   </div>
 );
}
export default function Total({ productos, sumatotal, updateCarrito }) 
{
 const dispatch = useDispatch();
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const [mensaje, setMensaje] = useState(""); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [urlPago, setUrlPago] = useState("");

    useEffect(() => {
     // Calcular el nuevo total
     const nuevoTotal = productos.reduce((total, producto) => total + (producto.subtotalitem), 0);
     updateCarrito(nuevoTotal);
   }, [productos, updateCarrito]);

    const handleCompra = async () => {
    if(isAuthenticated){
      const loginuser = "claudiodavid339@gmail.com";
    const hashvalidacionpago = "AUN_NO";
    //const valortotaloc = productos.Total;
    const valortotaloc = productos.reduce((total, producto) => total + producto.subtotalitem, 0);
    console.log('PUTA LA WEA:', valortotaloc,' .');

    const estadooc = "pendiente";
    const detalleocx = productos.map((pr) => ({
      idproducto: pr.id,  nombreproducto: pr.nombre,  valorunitario: pr.valorunit,   cant: pr.cantidad,
      subtotal: pr.subtotalitem,    }));
    const body = { loginuser, hashvalidacionpago, valortotaloc, estadooc, detalleocx, };
    
    console.log('body',body);
    
    try {
      const response = await axios.post("/generar-orden", body);
      const urlPago = response.data.URLo;
      setUrlPago(urlPago);
      setModalIsOpen(true);
      //dispatch(reinicia_store());
            
      // dispatch(getAllProducts(1));      
      // dispatch(getAllCategorias());  
      /**limpieza de deploy  */    
    } catch (error) {     console.error(error);   }
    } else {
      loginWithRedirect();
    }

    
  };
  
  const reiniciaCarro = ()=> { 
     dispatch(reinicia_store());

     dispatch(getAllProducts(1));
     dispatch(getAllCategorias());
  }

  const limpiaPantalla = () => {  window.location.reload(true);  }   
  const closeModal = () => {  setModalIsOpen(false);  };
  return (
    
    <div className={s.fondo}>
      <div className={s.titulo}>Sumatoria</div>
      <div className={s.total}>       
        <h1>TOTAL</h1>
        <p>${sumatotal ?? 0}</p> {/* Usar el operador ?? para manejar valores undefined o NaN */}
      </div>
      <button className={s.button} onClick={handleCompra}>
        <span>COMPRAR</span>
      </button>
      <button className={s.button} onClick={reiniciaCarro}>
        <span>LIMPIA CARRO</span>
      </button>
      <button className={s.button} onClick={limpiaPantalla}>
        <span>LIMPIA PANTALLA</span>
      </button>    
      <Modal  isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="URL de Pago" >
        <h2>Pago realizado exitosamente</h2>
        <p>Haz clic en el enlace para pagar:</p>
        <a href={urlPago}>{urlPago}</a>
        <button onClick={closeModal}>Cerrar</button>        
      </Modal>
    </div>
  );
}

// export default function Total({ productos, sumatotal, updateCarrito  }) {

//   const {isAuthenticated, loginWithRedirect} = useAuth0();

//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const calculateTotal = () => {
//       let sum = 0;
//       for (const producto of productos) {
//         sum += producto.precio * producto.cantidad;
//       }
//       setTotal(sum);
//     };

//     calculateTotal();
//   }, [productos]);

//   const redirectToMercadoPago = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ productos }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         window.location.href = data.init_point;
//       } else {
//         console.log("Error al crear la orden de pago");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//       <div className={s.fondo}>
//         <div className={s.titulo}>Sumatoria</div>
//         <div className={s.total}>
//           <h1>Total</h1>
//           <p>${total}</p>
//         </div>
//         <button id="comprar-btn" className={s.button} onClick={redirectToMercadoPago}>
//           <span>Comprar</span>
//         </button>
//       </div>
//   );
// }

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
