import React from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productosActions';

const Producto = ({producto}) => {
  const { nombre, precio, id} = producto;

  // Para Llamar a las acciones
  const dispatch = useDispatch();

  //Como queremos que haya una alerta que haga al usuario confirmar si quiere borrar el producto, lo hacemos:
  const confirmarEliminarProducto = (id) => {

    // Confirmacion de sweet alert
    console.log("id ", id);

    dispatch(borrarProductoAction());
  }


  return (
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weight-bold">$ </span>{precio}</td>
      <td className="acciones">
        <Link
          to={`/productos/editar/${id}`}
          className="btn btn-primary mr-2"
        >
          Editar
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => { confirmarEliminarProducto(id) }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;