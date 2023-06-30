import React, { useRef, useState } from "react";
import { Formik, FieldArray, Field } from "formik";
import { TextField, Button, Grid, Input } from "@mui/material";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import * as Yup from "yup";
import axios from "axios";

//Aqui se renderiza el formulario para crear un nuevo producto

export default function FormProducto() {
  const fileRef = useRef(null);
  const cloudName = "dmjkjz1oa";

  const requiredString = Yup.string().required("Campo requerido");

  const regexImg = /\.(jpg|jpeg|png|gif|bmp)$/;
  const initialValues = {
    nombreproducto: "",
    fotoprinc: "",
    disponibproducto: "",
    descproducto: "",
    precioproducto: "",
    colorproducto: [],
    categori: "",
  };

  const [urlImagen, setUrlImagen] = useState("vacio");

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    console.log("antes del append");
    formData.append("file", file);
    formData.append("upload_preset", "shoppie"); // Reemplaza 'tu_upload_preset' por tu propio valor
    try {
      console.log("form data:", formData);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log("response data:", response.data);
      console.log(response.data.url);
      setUrlImagen(response.data.url);
      console.log(urlImagen);
      alert("Imagen cargada");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Crear Producto</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            nombreproducto: requiredString.min(
              1,
              "Debes ingresar al menos 1 caracter"
            ),
            fotoprinc: Yup.mixed()
              .nullable()
              .required()
              .test(
                "FILE_FORMAT",
                "El archivo debe ser una imagen",
                (value) => {
                  return value && value.type.startsWith("image/");
                }
              ),
            disponibproducto: Yup.number()
              .integer("Ingresa un número entero")
              .positive("El stock debe ser mayor a cero")
              .required("Campo requerido"),
            descproducto: requiredString,
            precioproducto: Yup.number()
              .integer("Ingresa un número entero")
              .positive("El precio debe ser mayor a cero")
              .required("Campo requerido"),
            colorproducto: Yup.array().min(
              1,
              "Debe haber al menos un color añadido"
            ),
            categori: requiredString.min(
              1,
              "Debes ingresar al menos 1 caracter"
            ),
          })}
          onSubmit={async (values, { resetForm }) => {
            if (urlImagen === "vacio") alert("No ha cargado la imagen ");
            else {
              var body = {
                nombreproducto: values.nombreproducto,
                fotoprinc: urlImagen,
                disponibproducto: values.disponibproducto,
                descproducto: values.descproducto,
                precioproducto: values.precioproducto,
                colorproducto: values.colorproducto,
                categori: values.categori,
              };
              var confirmar = window.confirm(
                "Se enviará" + JSON.stringify(body)
              );
              if (confirmar) {
                try {
                  await axios.post(
                    "https://commerce-back-2025.up.railway.app/productoCrear",
                    values
                  );
                  alert("Producto creado");
                  resetForm();
                } catch (err) {
                  alert(err.message);
                }
              }
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
              >
                <Grid item>
                  <TextField
                    id="nombreproducto"
                    name="nombreproducto"
                    label="Nombre producto:"
                    placeHolder="Producto nuevo"
                    value={values.nombreproducto}
                    onChange={handleChange}
                    error={
                      touched.nombreproducto && Boolean(errors.nombreproducto)
                    }
                    helperText={touched.nombreproducto && errors.nombreproducto}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="fotoprinc"
                    type="file"
                    ref={fileRef}
                    onChange={(e) => {
                      setFieldValue("fotoprinc", e.target.files[0]);
                    }}
                    error={touched.fotoprinc && Boolean(errors.fotoprinc)}
                    helperText={touched.fotoprinc && errors.fotoprinc}
                  />

                  {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
                  {values.fotoprinc && (
                    <div>
                      <Image
                        hidden
                        cloudName={cloudName}
                        publicId={values.fotoprinc.name}
                      />
                    </div>
                  )}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "#ff6e40", borderBlockColor: "#ff6e40" }}
                    onClick={() => handleImageUpload(values.fotoprinc)}
                  >
                    Cargar Imagen{" "}
                  </Button>
                  {/* <button onClick={() => handleImageUpload(image)}>Subir imagen</button> */}
                </Grid>

                <Grid item>
                  <TextField
                    id="disponibproducto"
                    name="disponibproducto"
                    type="number"
                    label="Cantidad de producto: "
                    placeHolder="0"
                    value={values.disponibproducto}
                    onChange={handleChange}
                    error={
                      touched.disponibproducto &&
                      Boolean(errors.disponibproducto)
                    }
                    helperText={
                      touched.disponibproducto && errors.disponibproducto
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="outlined-multiline-flexible"
                    name="descproducto"
                    label="Descripción:"
                    placeHolder="Escribe la descripción de tu producto"
                    multiline
                    maxRows={4}
                    value={values.descproducto}
                    onChange={handleChange}
                    error={touched.descproducto && Boolean(errors.descproducto)}
                    helperText={touched.descproducto && errors.descproducto}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="precioproducto"
                    name="precioproducto"
                    type="number"
                    label="Precio unitario: "
                    placeHolder="0"
                    value={values.precioproducto}
                    onChange={handleChange}
                    error={
                      touched.precioproducto && Boolean(errors.precioproducto)
                    }
                    helperText={touched.precioproducto && errors.precioproducto}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="categori"
                    name="categori"
                    label="Categoría:"
                    value={values.categori}
                    onChange={handleChange}
                    error={touched.categori && Boolean(errors.categori)}
                    helperText={touched.categori && errors.categori}
                  />
                </Grid>

                <Grid item>
                  <FieldArray name="colorproducto">
                    {({ push, remove, form }) => (
                      <div>
                        {form.values.colorproducto.map((color, index) => (
                          <div key={index}>
                            <Field name={`colorproducto[${index}]`} />
                            <Button
                              sx={{ color: "#ff6e40" }}
                              type="button"
                              onClick={() => remove(index)}
                            >
                              Eliminar
                            </Button>
                          </div>
                        ))}
                        <Button
                          sx={{ color: "#ff6e40", borderBlockColor: "#ff6e40" }}
                          variant="outlined"
                          type="button"
                          onClick={() => push("")}
                        >
                          Agregar Color
                        </Button>
                      </div>
                    )}
                  </FieldArray>

                  {errors.colorproducto ? (
                    <div className="error">{errors.colorproducto}</div>
                  ) : null}
                </Grid>
                <Button
                  sx={{ backgroundColor: "#ff8a65" }}
                  variant="contained"
                  type="submit"
                >
                  Enviar
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </>
  );
}
