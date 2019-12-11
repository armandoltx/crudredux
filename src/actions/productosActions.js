// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociadaa estar en las acciones y en los reducers
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR
} from '../types';

// Crear un nuevo producto - Funcion Principal
// Siempre hay q tener una Funcion Principal
// esta es la funcion q se va a mandar llamar en el componente
// tambien manda a llamar las otras dos acciones q van a ir ejecutando (AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR)

export function crearNuevoProductAction(producto) {
  // toma un producto, cuando rellenemos el formulario creara un producto
  return (dispatch) => {
    // dispatch basicamente va a mandar llamar las acciones tanto AGREGAR_PRODUCTO como EXITO o ERROR
    dispatch( nuevoProducto() )

    dispatch( agregarProductoExito(producto) )
  }
}

export const nuevoProducto = () => ({
  type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = (producto) => ({
  // se pasa el producto como parametro pq es el payload en el reducer
  // tb se pasa como payload en el objeto
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

// cuando ejecutemos crearNuevoProductAction desde el componenten usamos disptach para llamar nuevoProducto
// usando el type: AGREGAR_PRODUCTO