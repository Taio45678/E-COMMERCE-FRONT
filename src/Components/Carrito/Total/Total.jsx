import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useDispatch } from 'react-redux';
import { limpiarCarrito, reinicia_store } from '../../../Redux/actions.js';
import { getAllCategorias, getAllProducts } from '../../../Redux/actions';
import axios from 'axios';
import s from "./Total.module.css";

initMercadoPago('TEST-6150df70-606f-4169-971b-dff2a6c919b6');
<<<<<<< HEAD

export default function Total({ productos, sumatotal, updateCarrito }) {
  const dispatch = useDispatch();
  const [urlPago, setUrlPago] = useState('');
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    const nuevoTotal = productos.reduce((total, producto) => total + producto.subtotalitem, 0);
    updateCarrito(nuevoTotal);
  }, [productos, updateCarrito]);

  const handleCompra = async () => {
    if (isAuthenticated) {
      try {
        const loginuser = user.email; // Utilizar el correo electrónico del usuario autenticado
        const hashvalidacionpago = 'AUN_NO';
        const valortotaloc = productos.reduce((total, producto) => total + producto.subtotalitem, 0);
        console.log('PROBANDO:', valortotaloc, ' .');

        const estadooc = 'pendiente';
        const detalleocx = productos.map((pr) => ({
          idproducto: pr.id,
          nombreproducto: pr.nombre,
          valorunitario: pr.valorunit,
          cant: pr.cantidad,
          subtotal: pr.subtotalitem,
        }));
        const body = { loginuser, hashvalidacionpago, valortotaloc, estadooc, detalleocx };

        console.log('body', body);

        const response = await axios.post('/generar-orden', body);
        const urlPago = response.data.URLo;
        setUrlPago(urlPago);

        // Redireccionar a la URL de Mercado Pago
        window.location.href = urlPago;

        // Resto de código
        // dispatch(reinicia_store());
        // dispatch(getAllProducts(1));
        // dispatch(getAllCategorias());
      } catch (error) {
        console.error(error);
      }
    } else {
      // Si el usuario no está autenticado, redirigir al formulario de inicio de sesión de Auth0
      loginWithRedirect();
    }
  };

  const reiniciaCarro = () => {
    dispatch(reinicia_store());
    dispatch(getAllProducts(1));
    dispatch(getAllCategorias());
  };

  const limpiaPantalla = () => {
    window.location.reload(true);
=======
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

    
>>>>>>> 096c66dca618e1993b29d689adc1e01fbf5e9adb
  };

<<<<<<< HEAD
  const redirectToProfile = () => {
    window.location.href = '/profile';
  };
=======
     dispatch(getAllProducts(1));
     dispatch(getAllCategorias());
     window.location.reload(true);
  }
>>>>>>> 096c66dca618e1993b29d689adc1e01fbf5e9adb

  return (
    
    <div className={s.fondo}>
      <div className={s.titulo}>Sumatoria</div>
      <div className={s.total}>
        <h1>TOTAL</h1>
        <p>${sumatotal ?? 0}</p>
      </div>
      <button className={s.button} onClick={handleCompra}>
        <span>COMPRAR</span>
      </button>
      <button className={s.button} onClick={reiniciaCarro}>
        <span>LIMPIA CARRO</span>
      </button>
      {/* <button className={s.button} onClick={limpiaPantalla}>
        <span>LIMPIA PANTALLA</span>
<<<<<<< HEAD
      </button>
      <button className={s.button} onClick={redirectToProfile}>
        <span>Ir a Perfil</span>
      </button>
=======
      </button>     */}
      <Modal  isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="URL de Pago" >
        <h2>Pago realizado exitosamente</h2>
        <p>Haz clic en el enlace para pagar:</p>
        <a href={urlPago}>{urlPago}</a>
        <button onClick={closeModal}>Cerrar</button>        
      </Modal>
>>>>>>> 096c66dca618e1993b29d689adc1e01fbf5e9adb
    </div>
  );
}
