import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import logo from "../Img/logoAll.png";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogOut from "../LogOut/LogOut";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import carrito from "../Img/carrito.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Tecnologia",
  "Electrodomesticos",
  "Hogar y Muebles",
  "Herramientas",
  "Moda",
  "Juguetes",
  "Construccionr",
  "Otros",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NavBar() {
  const { isAuthenticated } = useAuth0();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="navbar-container">
      <div className="caja1">
        <div className="caja1A">
          <Link to="/">
            <div className="cajaLogo">
              <img src={logo} alt="" className="logo" />
            </div>
          </Link>
          <div className="busqueda">
            <SearchBar></SearchBar>
          </div>
          <div className="carrito">
            <Link to="/carrito">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/873/880/non_2x/store-flat-icon-design-shop-icon-design-shop-icon-isolated-on-grey-background-shop-sign-vector.jpg"
                alt=""
                className="carritoLogo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="caja2-container">
        <div className="caja2B">
          <div className="home">
            <Link to="/home">
              <img
                src="https://scontent.fcor16-1.fna.fbcdn.net/v/t39.30808-6/356230708_1436119560543016_9206910051547847731_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=mBbIP6t34VgAX8WvQlV&_nc_ht=scontent.fcor16-1.fna&oh=00_AfDWGjo3WrOfAar84B1FZOdIt7Fr9laxB70faOIiwi2KsQ&oe=649D673A"
                alt=""
                className="imagenHome"
              />
            </Link>
          </div>
          <div className="categorias">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel
                id="demo-multiple-name-label"
                style={{ color: "white", border: "none" }}
              >
                Categorias
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                style={{ background: "dark", color: "white" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Link to="/Favoritos">Favoritos</Link>
            <Link to="/aboutus">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="actividades">
            {isAuthenticated ? (
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <p style={{ color: "white" }}>Mi cuenta</p>
              </Link>
            ) : null}
            <Link to="/formProducto" style={{ textDecoration: "none" }}>
              <p style={{ color: "red" }}>Vender</p>
            </Link>
            {isAuthenticated ? <LogOut /> : <Login />}
          </div>
        </div>
      </div>
    </div>
  );
}
