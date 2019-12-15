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

export const validacionExito = () => {
  return {
    type: VALIDAR_FORMULARIO_EXITO
  }
}

export const validacionError = () => {
  return {
    type: VALIDAR_FORMULARIO_ERROR
  }
}

// Abriendo developer tools de chrome, reducer, vemos q al darle a state error = null, q es el state inicial
// si dejamos vacio el formulario y presionamos el boton agregar
// El state cambia a true; 1 se llama a la accion VALIDAR FORMULARIO y luego a VALIDAR_FORMULARIO_ERROR
// q es la q cambia el state a true
// en nuestro componente llamamos a la funcion validarFormulario(), que llama a la accion iniciarValidacion()
// que lo unico q hace es validar el formulario, lo vemos en el reducer q el state lo deja como null
// luego salta a la validacion, donde se llama a la funcion errorVAlidacion() que ejecuta la accion validacionError()
// que se conecta con el reducer VALIDAR_FORMULARIO_ERROR que cambia el state a true
// si rellenamos el formulario haria lo mismo con exitoValidacion();
// llama a la accion, esta mira el reducer y cambia el state en funcion del valor q tenga el reducer.