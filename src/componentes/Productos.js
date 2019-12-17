import React, { useEffect } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';

const Productos = () => {

  // Llamar a la accion para OBTENER LOS PRODUCTOS
  const dispatch = useDispatch();

  // Usamos useEffect que es similar a componentDidMount.
  // Una vez q el componente este listo, llamamos a los prorductos
  // El useEffect es siempre un arrow function
  useEffect( () => {
    // Aqui es donde vamos a llamar a los productos cuando el componente este listo
    const cargarProductos = () => dispatch( obtenerProductosAction() );
    cargarProductos();
  });

  // Acceder al state
  // con useSelector se accede al state en este caso accedemos a loading
  const loading = useSelector( state => state.productos.loading );


  return (
    <React.Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      { loading ? 'Cargando...' : null }
    </React.Fragment>
  );
};

export default Productos;