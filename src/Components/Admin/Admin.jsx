import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Admin.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Ventas from "./Ventas/Ventas";
import MisDatos from "./MisDatos/MisDatos";
import UsuariosAct from "./Usuarios/UsuariosAct";
import Publicaciones from "./Publicaciones/Publicaciones";
import Desabilitados from "./Desabilitados/Desabilitados";
import Perfil from "./Usuarios/Perfil/Perfil";
import { useSelector } from "react-redux";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {},
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          "&.Mui-selected": {
            color: "#FF0000",
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

export default function Admin() {
  const [value, setValue] = React.useState(0);
  const usuarioDetail = useSelector((state) => state.usuarioDetail);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={s.fondo}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            height: 680,
          }}
        >
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
            <Tab label="Publicaciones" {...a11yProps(0)} />
            <Tab label="Ventas" {...a11yProps(1)} />
            <Tab label="Usuarios Hab." {...a11yProps(2)} />
            <Tab label="Usuarios Des." {...a11yProps(3)} />
            <Tab label="Mis datos" {...a11yProps(4)} />
          </Tabs>
          <div className={s.nombreUsuario}>
            <img
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
              alt=""
              className={s.avatar}
            />
            <h4>Nombre Apellido</h4>
            <h5>Rol: Administrador</h5>
          </div>
          <TabPanel value={value} index={0} className={s.datos}>
            <Publicaciones />
          </TabPanel>
          <TabPanel value={value} index={1} className={s.caja1}>
            <div className={s.cajaInterna1}>
              <Ventas />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={s.datos}>
            <UsuariosAct />
          </TabPanel>
          <TabPanel value={value} index={3} className={s.datos}>
            <Desabilitados />
          </TabPanel>
          <TabPanel value={value} index={4} className={s.datos}>
            <MisDatos />
          </TabPanel>
          <TabPanel value={value} index={5} className={s.datos}>
            <Perfil />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}
