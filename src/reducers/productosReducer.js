// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociada
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
  PRODUCTO_EDITAR_ERROR
} from '../types';


// Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false,
  producto: {} // agregamos esto pq al llamar al producto desde el componente editar, nos enseña el producto
  // anterior, pq estamos agregando una propiedad nueva llamada producto, q no es parte del state inicial, por
  // eso hay que agregarlo.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        error: null,
      }
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        error: null,
        productos: [...state.productos, action.payload]
        // este toma un payload q es el nuevo producto q cambia el state
        // hay q agregarlo a la accion
      }
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        // en este caso al no venir los cambios desde afuera, no queremos que cambie el state.
        // lo hacemos asi.
      }
    case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: true,
        producto: {}, // hay q agregarlo aqui tb pq al editar y voler atras y volver a editar hay q vaciarlo
      }
    case DESCARGA_PRODUCTOS_EXITOSA:
      // esta se hara usando axios
      return {
        ...state,
        productos: action.payload,
        error: null,
        loading: false,
        producto: {}, // hay q agregarlo aqui tb pq al editar y voler atras y volver a editar hay q vaciarlo
      }
    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        productos: [],
        error: true,
        loading: false,
        producto: {}, // hay q agregarlo aqui tb pq al editar y voler atras y volver a editar hay q vaciarlo
      }
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        error: null,
      }
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        error: null,
        productos: state.productos.filter( producto => producto.id !== action.payload )
        // aplicamos un filter para sacar del arreglo el producto al que le clickeamos en el boton eliminar
        // los products q son diferentes se quedan en el state, el q es igual sale del arreglo
      }
    case PRODUCTO_ELIMINADO_ERROR:
      return {
        ...state,
        error: true,
      }
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        error: null,
      }
    case PRODUCTO_EDITAR_EXITO:
      return {
        ...state,
        error: null,
        producto: action.payload // consultamos un producto con un id y lo colocamos en el state
      }
    case PRODUCTO_EDITAR_ERROR:
      return {
        state,
        error: true
      }

    default:
      return state;
  }
}

// EL payload es lo q usualmente hace cambiar el state
// el payload son los datos q vienen desde la interfaz del usuario y se tienen q comunicar
// en tus reducers y acciones