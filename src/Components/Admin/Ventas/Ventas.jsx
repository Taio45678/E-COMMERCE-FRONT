import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../../Redux/actions";
import s from "./Ventas.module.css";
import { Pagination } from "@mui/material";

const Ventas = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productosVentas);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 4;

  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    dispatch(fetchProductos(page, rowsPerPage));
  }, [dispatch, page]);

  useEffect(() => {
    if (productos) {
      const total = Math.ceil(productos.length / rowsPerPage);
      setTotalPages(total);
    }
  }, [productos, rowsPerPage]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const detalleocsToShow = productos?.slice(startIdx, endIdx);

  return (
    <div className={s.fondo}>
      <div className={s.cajaproductos}>
        <div className={s.titulo}>
          <div className={s.columna1}>imagen</div>
          <div className={s.columna2}>nombre</div>
          <div className={s.columna3}>comprador</div>
          <div className={s.columna4}>cantidad</div>
          <div className={s.columna5}>estado</div>
          <div className={s.columna6}>precio</div>
        </div>
        <div className={s.productos}>
          {detalleocsToShow &&
            detalleocsToShow.map((producto) => (
              <div key={producto.id} className={s.venta}>
                <div className={s.columna1}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/014/704/006/non_2x/paper-shop-bag-icon-simple-style-vector.jpg"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <div className={s.columna2}>{producto.nombreproducto}</div>
                <div className={s.columna3}>Comprador</div>
                <div className={s.columna4}>{producto.cant}</div>
                <div className={s.columna5}>{producto.idoc}</div>
                <div className={s.columna6}>${producto.valorunitario}</div>
              </div>
            ))}
        </div>
        <div className={s.pagination}>
          <Pagination
            count={5}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            boundaryCount={2} // Mostrar los primeros y últimos 2 números de página
            showFirstButton
            showLastButton
            siblingCount={2}
          />
        </div>
      </div>
      <div className={s.total}>
        <div className={s.suma}>total:</div>
        <div className={s.pesos}>\$000</div>
      </div>
    </div>
  );
};

export default Ventas;
