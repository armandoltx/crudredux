// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociadaa estar en las acciones y en los reducers
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITAR_EXITO,
  PRODUCTO_EDITAR_ERROR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'

// Crear un nuevo producto - Funcion Principal
// Siempre hay q tener una Funcion Principal
// esta es la funcion q se va a mandar llamar en el componente
// tambien manda a llamar las otras dos acciones q van a ir ejecutando (AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR)

export function crearNuevoProductAction(producto) {
  // toma un producto, cuando rellenemos el formulario creara un producto
  return (dispatch) => {
    // dispatch basicamente va a mandar llamar las acciones tanto AGREGAR_PRODUCTO como EXITO o ERROR
    dispatch( nuevoProducto() )

    // Insertar en la API
    // al haber creado axios.js y usar la funcion, solo pasamos la parte ultima de la url: '/libros'
    // asi es mas comodo a la hora de hacer mas verbos http
    clienteAxios.post('/libros', producto)
      .then(respuesta => {
        // si se inserta correctamente se ejecuta:
        console.log(respuesta);
        dispatch( agregarProductoExito(producto) )

      })
      .catch(error => {
        // si hay un error
        console.log(error);
        dispatch( agregarProductoError() )
      })
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

export const agregarProductoError = () => ({
  type: AGREGAR_PRODUCTO_ERROR,
  // en el caso de que el cambio del state no venga por el usuario, tipo un error, no queremos usar payload
  // preferimos hacer el cambio nosotros con codigo
  // por eso no se agrega payload ni se pasa nada como parametro
})

// cuando ejecutemos crearNuevoProductAction desde el componenten usamos disptach para llamar nuevoProducto
// usando el type: AGREGAR_PRODUCTO

// === Obtener Listado de Productos ==> CONSULTAR API usando axios
export function obtenerProductosAction () {
  return (dispatch) => {
    dispatch(obtenerProductsComienzo() );

    // Consultar la API
    // al haber creado axios.js y usar la funcion, solo pasamos la parte ultima de la url: '/libros'
    // asi es mas comodo a la hora de hacer mas verbos http
    clienteAxios.get('/libros')
      .then(respuesta => {
        // console.log(respuesta);
        dispatch( descargaProductosExitosa(respuesta.data) ) // para saber como acceder ver el console.log
      })
      .catch(error => {
        // console.log(error);
        dispatch( descargaProductosError() );
      })

  }
}

export const obtenerProductsComienzo = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosExitosa = (productos) => ({ // el payload lo pasamos como parametro
  type: DESCARGA_PRODUCTOS_EXITOSA,
  payload: productos
})

export const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
})

// === FUNCION que ELIMINA UN PRODUCTO
export function borrarProductoAction (id) {
  return (dispatch) => {
    dispatch( obtenerProductoEliminar() );

    // Eliminar en la API y en el State
    // al haber creado axios.js y usar la funcion, solo pasamos la parte ultima de la url: '/libros'
    // asi es mas comodo a la hora de hacer mas verbos http
    clienteAxios.delete(`/libros/${id}`) // lo eliminamos del servidor via axios
      .then(respuesta => {
        // console.log(respuesta);
        dispatch(eliminarProductoExito(id)); // pasamos el id para q lo elimine del state
      })
      .catch(error => {
        // console.log(error);
        dispatch(eliminarProductoError());
      })

  }
}

export const obtenerProductoEliminar = () => ({
  // este type, reducer, action empiza la cadena de acciones para eliminar el producto
  type: OBTENER_PRODUCTO_ELIMINAR,
})

export const eliminarProductoExito = (id) => ({
  type: PRODUCTO_ELIMINADO_EXITO,
  payload: id
})

export const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
})


// === FUNCION que EDITA UN PRODUCTO, pero primero lo obtenemos
export function obtenerProductoEditarAction(id) {
  return (dispatch) => {
    dispatch(obtenerProductoEditar());

    // Editar en la API y en el State
    // al haber creado axios.js y usar la funcion, solo pasamos la parte ultima de la url: '/libros'
    // asi es mas comodo a la hora de hacer mas verbos http
    clienteAxios.get(`/libros/${id}`) // lo obtenemos del servidor via axios
      .then(respuesta => {
        console.log(respuesta.data);
        dispatch(productoEditarExito(respuesta.data));
      })
      .catch(error => {
        console.log(error);
          dispatch(productoEditarError());
      })
  }
}

export const obtenerProductoEditar = () => ({
  type: OBTENER_PRODUCTO_EDITAR,
})

export const productoEditarExito = (producto) => ({
  type: PRODUCTO_EDITAR_EXITO,
  payload: producto
})

export const productoEditarError = () => ({
  type: PRODUCTO_EDITAR_ERROR
})

// === Modifica un producto en la API y el state

export function editarProductoAction(producto) {
  return (dispatch) => {
    dispatch(comenzarEdicionProducto());

    // Consultar la API
    clienteAxios.put(`/libros/${producto.id}`, producto) // producto.id es un objeto q pasamos desde editarProducto();
    //producto despues de la coma, es el objeto q el usuario llene en el formulario y al presionar el boton se enviara a la API
      .then(respuesta => {
        console.log(respuesta.data);
        dispatch(editarProductoExito(respuesta.data));

        Swal.fire(
          'Almacenado',
          'El producto se actualizó correctamente',
          'success'
        )
      })
      .catch(error => {
        console.log(error);
        dispatch(editarProductoError());
      })
  }
}

export const comenzarEdicionProducto = () => ({
  type: COMENZAR_EDICION_PRODUCTO
})

export const editarProductoExito = (producto) => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto
})

export const editarProductoError = () => ({
  type: PRODUCTO_EDITADO_ERROR
})
