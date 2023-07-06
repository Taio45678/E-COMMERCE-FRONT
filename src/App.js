import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import DetailProducto from "./Components/DetailProducto/DetailProducto";
import FormProducto from "./Components/FormProducto/FormProducto";
import LandingPage from "./Components/LandingPage/LandingPage";
import SwipeableTextMobileStepper from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import HomeBusqueda from "./Components/HomeBusqueda/HomeBusqueda";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto";
import { Routes, Route, useNavigate } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito/Carrito";
import FormCrearUsuario from "./Components/FormCrearUsuario/FormCrearUsuario";
import Profile from "./Components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { log_in } from "./Redux/actions";
import Favoritos from "./Components/Favoritos/Favoritos";
import { useLocation } from "react-router-dom";
import Admin from "./Components/Admin/Admin";

function App() {
  // const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      log_in(user);
    }
  }, []);

  const location = useLocation();
  //Funcion para salir de la landing page e ir al home
  function onClick() {
    navigate("/home");
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<SwipeableTextMobileStepper />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/formProducto" element={<FormProducto />}></Route>
        <Route path="/detailProducto/:id" element={<DetailProducto />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/formCrearUsuario" element={<FormCrearUsuario />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route
          path="/busqueda/:producto"
          element={<HomeBusqueda></HomeBusqueda>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
