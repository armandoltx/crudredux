// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociada
import {
  VALIDAR_FORMULARIO,
  VALIDAR_FORMULARIO_EXITO,
  VALIDAR_FORMULARIO_ERROR
} from '../types'
import { cloneWithoutLoc } from '@babel/types'

// Cada reducer tiene su propio state

const initialState = {
  error: null
}

export default function(state= initialState, action) {
  switch(action.type) {
    case VALIDAR_FORMULARIO:
      return{
        ...state,
        error: null
      }
    case VALIDAR_FORMULARIO_EXITO:
      return {
        ...state,
        error: null
      }
    case VALIDAR_FORMULARIO_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}