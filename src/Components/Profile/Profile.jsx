import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tabs, Tab, Typography, Box, Avatar, } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Compras from "./Compras/Compras";
import MisDatos from "./MisDatos/MisDatos";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          // Estilos para las tabs en general
        },
        indicator: {
          // Estilos para el indicador de la opción seleccionada
          display: "none", // Ocultar el indicador
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // Estilos para las opciones sin seleccionar
          color: "#FFFFFF", // Color blanco
          "&.Mui-selected": {
            // Estilos para la opción seleccionada
            color: "#FF0000", // Color rojo
            borderRight: "none",
          },
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isAuthenticated ? 
    

    <ThemeProvider theme={theme}>
  <Box sx={{ height: "680px", width: "100%", display: "flex" }}>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        width: "211px",
        borderRight: 1,
        borderColor: "divider",
        background: "black",
        paddingTop: "340px",
      }}
    >
      <Tab label="Compras" {...a11yProps(0)} />
      <Tab label="Mis datos" {...a11yProps(1)} />
    </Tabs>
    <Box
      sx={{
        backgroundColor: "rgb(210, 210, 210)",
        width: "11%",
        height: "310px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: "40%",
        transform: "translateY(-50%)",
        left: "2%",
      }}
    >
      <Avatar sx={{ width: "90%", height: "auto", margin: "1", }}>
        <img
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          alt=""
          style={{ width: "100%" }}
        />
      </Avatar>
      <Typography
        variant="h4"
        sx={{
          fontSize: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mt: "15px",
        }}
      >
        {"Nombre Apellido"
          .split(" ")
          .map((word, index) => (
            <span key={index}>{word}</span>
          ))}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: "15px",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        Rol: Usuario
      </Typography>
    </Box>
    <TabPanel
      value={value}
      index={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
      }}
    >
      <Box sx={{ width: "130%" }}>
        <Compras></Compras>
      </Box>
    </TabPanel>
    <TabPanel
      value={value}
      index={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        marginLeft: "212px",
        width: "88.5%",
        height: "580px",
      }}
    >
      <MisDatos></MisDatos>
    </TabPanel>
  </Box>
</ThemeProvider>
: loginWithRedirect() }
</>
  );
}
