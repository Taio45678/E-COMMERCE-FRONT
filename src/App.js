
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import DetailProducto from './Components/DetailProducto/DetailProducto';
import FormProducto from './Components/FormProducto/FormProducto';
import LandingPage from './Components/LandingPage/LandingPage';
import CardContainer from './Components/CardContainer/CardContainer';
import AboutUs from './Components/AboutUs/AboutUs'
import {useLocation, Routes, Route, useNavigate, Router} from 'react-router-dom'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  //Funcion para salir de la landing page e ir al home 
  function onClick(){
    navigate('/home')
  }

  return (
    <Router>
      {location.pathname === '/' ? (
        <LandingPage onClick={onClick} />
      ) : (
        <NavBar />
      )}      
      <Routes>
        <Route path='/home' element ={<CardContainer/>}></Route>
        <Route path='/aboutus' element ={<AboutUs/>}></Route>
        <Route path='/formProducto' element ={<FormProducto/>}></Route>
        <Route path='/detailProducto/:id' element ={<DetailProducto/>}></Route>
      </Routes>
    </Router>  
  );
}

export default App;