// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociada
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR,
} from '../types';


// Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false
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
        loading: true


      }
    case DESCARGA_PRODUCTOS_EXITOSA:
      // esta se hara usando axios
      return {
        ...state,
        productos: action.payload,
        error: null,
        loading: false
      }
    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        productos: [],
        error: true,
        loading: false
      }
      default:
        return state;
  }
}

// EL payload es lo q usualmente hace cambiar el state
// el payload son los datos q vienen desde la interfaz del usuario y se tienen q comunicar
// en tus reducers y acciones