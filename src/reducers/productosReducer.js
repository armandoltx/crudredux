// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociada
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR
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
      }
      default:
        return state;
  }
}

// EL payload es lo q usualmente hace cambiar el state
// el payload son los datos q vienen desde la interfaz del usuario y se tienen q comunicar
// en tus reducers y acciones