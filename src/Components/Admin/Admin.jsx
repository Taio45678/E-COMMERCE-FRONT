import React from "react";
import s from "./Admin.module.css";
import { Link, Outlet } from "react-router-dom";

//####################################

export default function Admin() {
  return (
    <div className={s.fondo}>
      <div className={s.navBar}>
        <div className={s.caja1}>
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt=""
            className={s.imagen}
          />
          <h1>Nombre Apellido</h1>
          <p>Rol: Administrador</p>
        </div>
        <div className={s.caja2}>
          <Link
            to="/admin/publicaciones"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            PUBLICACIONES
          </Link>
          <Link
            to="/admin/ventas"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            VENTAS
          </Link>
          <Link
            to="/admin/usuarios"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            USUARIOS HAB.
          </Link>
          <Link
            to="/admin/baneados"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            USUARIOS DES.
          </Link>
          <Link
            to="/admin/mis-datos"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            MIS DATOS
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
    {isAuthenticated ? 
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
              <Tab label="Usuarios" {...a11yProps(2)} />
              <Tab label="Mis datos" {...a11yProps(3)} />
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
              <Publicaciones></Publicaciones>
            </TabPanel>
            <TabPanel value={value} index={1} className={s.caja1}>
              <div className={s.cajaInterna1}>
                <Ventas></Ventas>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} className={s.datos}>
              <Usuarios></Usuarios>
            </TabPanel>
            <TabPanel value={value} index={3} className={s.datos}>
              <MisDatos></MisDatos>
            </TabPanel>
          </Box>
        </ThemeProvider>
      </div>
      : loginWithRedirect()}
    
    </>
  );
}
