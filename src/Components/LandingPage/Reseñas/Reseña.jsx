import * as React from "react";
import s from "./Reseña.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Reseña() {
  const [value, setValue] = React.useState(5);

  return (
    <div className={s.caja5}>
      <div className={s.cajaInterna}>
        <div className={s.reseña}>
          <h1>Reseña</h1>
          <div>
            <p>Opiniones de la gente sobre sus compras</p>
          </div>
        </div>
        <div className={s.carrusel}>
          <div className={s.carrusel1}>
            <div className={s.imagen}>
              <div className={s.cajaImagen}>
                <img
                  src="https://apoyomexico.mx/wp-content/uploads/2019/11/60873952_m.jpg"
                  alt=""
                  className={s.fondoReseñas}
                />   
              </div>
            </div>
            <div className={s.caja}>
              <div className={s.avatar}></div>
              <div className={s.calificacion}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    readOnly
                  />
                </Box>
              </div>
            </div>
            <div className={s.opinion}>
              <div className={s.text}>
              Excelente servicio.Deja una vara muy alta respecto a todas las tiendas de retail.,yo soy compradora habitual,supieron darme una atención de excelencia.
                <span className={s.ellipsis}>...</span>
              </div>
            </div>
          </div>
          <div className={s.carrusel1}>
            <div className={s.imagen}>
              <div className={s.cajaImagen}>
              <img
                  src="https://www.publico.es/psicologia-y-mente/wp-content/uploads/2023/06/sonrisa-1024x678.jpg"
                  alt=""
                  className={s.fondoReseñas}
                />   
              </div>
            </div>
            <div className={s.caja}>
              <div className={s.avatar}></div>
              <div className={s.calificacion}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    defaultValue={5}
                    readOnly
                  />
                </Box>
              </div>
            </div>
            <div className={s.opinion}>
              <div className={s.text}>
              A mi gusto muy bueno todo me ha llegado a tiempo y no he tenido ningún inconveniente llevo más de 15 compras, lo recomiendo es mucho mejor que Amazon.
                <span className={s.ellipsis}>...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
