import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../Img/Logo.png";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogOut from "../LogOut/LogOut";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Grid,
  Stack,
  Hidden,
  Slide,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();

  const [showCategories, setShowCategories] = React.useState(true);
  const handleArrowButtonClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <AppBar position="static" className="navbar-container" sx={{ backgroundColor: '#f44336', height: 180, }}>
      <Toolbar sx={{ mt: 3, ml: 5, }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", width: '40%', heigth: '20%' }}>
          <img src={logo} alt="" className="logo" sx={{ height: '40px' }}/>
          <Box display="flex" justifyContent="center" width="100%">
            <SearchBar></SearchBar>
          </Box>
        </Box>
  
        <IconButton color="inherit" component={Link} to="/carrito">
          <ShoppingCartIcon sx={{ fontSize: 40 }}/>
        </IconButton>
      </Toolbar>

      <Toolbar sx={{ mt: 1,}} >
        <Grid container justifyContent="space-between">
        <Box item xs={6} md={2} sx={{ width: 40, ml: 5,}}>
          <Box display="flex" justifyContent="center" >
            <IconButton color="inherit" component={Link} to="/home">
              <HomeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Box>

        <Grid item xs={6} md={4} sx={{ width: '80%', mr: '1%', mt: 3, }}>
      <Box display="flex" justifyContent="start" alignItems="center">
        <Box className="categorias">
          {showCategories && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Tecnología</Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Electrodomésticos</Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Hogar </Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Herramientas</Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Moda</Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Juguetes</Typography>
              </Link>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body1">Construcción</Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>

          <Grid item xs={6} md={2} sx={{ width: 150, mt: 2, }}>
            <Box display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={2}>
                <Hidden mdUp>
                  <IconButton color="inherit" onClick={handleArrowButtonClick}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Hidden>
                {isAuthenticated ? (
                  
                  <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
                  <Button variant="outlined" sx={{ borderColor: "#ffa726", color: "black", borderWidth: 1, backgroundColor: "#ffa726", borderRadius: "10%", width: "95px", height: "40px"}}>
              <Typography  sx={{ fontSize: "12px" }}>Mi cuenta</Typography>
              </Button>
                </Link>
              ) : null}
              <Link to="/formProducto" style={{ textDecoration: "none", color: "white", marginLeft: "10px" }}>
                <Button variant="outlined" sx={{ borderColor: "#ffa726", color: "black", borderWidth: 1, backgroundColor: "#ffa726",  borderRadius: "10%", width: "95px", height: "40px" }}>
                  <Typography sx={{ fontSize: "12px" }}>Vender</Typography>
                </Button>
              </Link>

                {isAuthenticated ? <LogOut /> : <Login />}
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
}

