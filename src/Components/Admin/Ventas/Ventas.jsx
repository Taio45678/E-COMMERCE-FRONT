import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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
    dispatch(fetchProductos(page + 1, rowsPerPage));
  }, [dispatch, page]);

  useEffect(() => {
    if (productos) {
      const total = Math.ceil(productos.length / rowsPerPage);
      setTotalPages(total);
    }
  }, [productos, rowsPerPage]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };

  const startIdx = page * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const detalleocsToShow = productos?.slice(startIdx, endIdx);

  //console.log(productos);
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
            detalleocsToShow?.map((producto) => (
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
                <div className={s.columna6}>Precio</div>
              </div>
            ))}
        </div>
        <div className={s.pagination}>
          <Pagination
            count={totalPages}
            page={page + 1}
            onChange={handlePageChange}
            shape="rounded"
          />
        </div>
      </div>
      <div className={s.total}>
        <div className={s.suma}>total:</div>
        <div className={s.pesos}>$000</div>
      </div>
      {/* Paginado y total */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productos: state.productos,
  };
};

export default connect(mapStateToProps, { fetchProductos })(Ventas);
