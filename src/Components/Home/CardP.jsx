import React from "react";
import {
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Card,
  CardActions,
  Rating,
} from "@mui/material";
import { createTheme, } from "@mui/material/styles";
import { useDispatch } from "react-redux";
// import { getAllProducts, getDetail } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

export default function CardP({ producto }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  if (!producto || !producto.fotoprinc) {
    return <p>Cargando</p>;
  }

  const arrayReview = [];
  producto.reviews?.forEach((review) => {
    arrayReview.push(review.rating);
  });
  const suma = arrayReview.reduce((ac, nu) => ac + nu, 0);
  const calificacion = suma / arrayReview.length;

  function handleClick() {
    navigate(`/detailProducto/${producto.id}`);
  }

  return (
    <Card
      sx={{
        maxWidth: "100%",
        minWidth: "200px",
        padding: 2,
        height: "auto",
        backgroundColor: "#dcedc8",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}
      onClick={handleClick}
    >
      <CardHeader
        avatar={
          <Avatar
            src={producto.fotoprinc}
            sx={{
              width: 160,
              height: 160,
              bgcolor: theme.palette.primary.light.toString(),
            }}
            aria-label="product"
          >
            {producto.nombreproducto
              .split(" ")
              .map((ele) => ele[0])
              .join("")}
          </Avatar>
        }
        title={
          <>
            <Typography
              sx={{
                display: "flex",
                width: "80px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              variant="h6"
            >
              {producto.nombreproducto}
            </Typography>
            <Typography variant="h7" sx={{ color: "blue" }}>
              {producto.nombrecat}
            </Typography>
            <Typography>
              <Rating name="read-only" value={calificacion} readOnly />
            </Typography>
          </>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ width: 200, h: 200, fontSize: 14 }}>
          {producto.descproducto}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            textAlign: "start",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          Stock: {producto.disponibproducto}
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            textAlign: "start",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          Price: $ {producto.precioproducto}
        </Typography>
      </CardActions>
    </Card>
  );
}
