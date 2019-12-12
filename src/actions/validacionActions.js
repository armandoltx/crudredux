// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociadaa estar en las acciones y en los reducers
import {
  VALIDAR_FORMULARIO,
  VALIDAR_FORMULARIO_EXITO,
  VALIDAR_FORMULARIO_ERROR
} from '../types'

export function validarFormularioAction() {
  return (dispatch) => {
    dispatch(iniciarValidacion() )
  }
}

export const iniciarValidacion = () => ({
  type: VALIDAR_FORMULARIO
});