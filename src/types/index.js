// Los types siempre van a estar en las acciones y en los reducers de esta forma cada reducer tiene su accion asociadaa estar en las acciones y en los reducers

export const VALIDAR_FORMULARIO = 'VALIDAR_FORMULARIO';
export const VALIDAR_FORMULARIO_EXITO = 'VALIDAR_FORMULARIO_EXITO';
export const VALIDAR_FORMULARIO_ERROR = 'VALIDAR_FORMULARIO_ERROR';

export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
export const AGREGAR_PRODUCTO_EXITO = 'AGREGAR_PRODUCTO_EXITO';
export const AGREGAR_PRODUCTO_ERROR = 'AGREGAR_PRODUCTO_ERROR';

export const COMENZAR_DESCARGA_PRODUCTOS = 'COMENZAR_DESCARGA_PRODUCTOS';
export const DESCARGA_PRODUCTOS_EXITOSA = 'DESCARGA_PRODUCTOS_EXITOSA';
export const DESCARGA_PRODUCTOS_ERROR = 'DESCARGA_PRODUCTOS_ERROR';

export const OBTENER_PRODUCTO_ELIMINAR = 'OBTENER_PRODUCTO_ELIMINAR',
// es el 1 porque cuando das click en el boton eliminar tienes que identificar cual se va a elminiar
export const PRODUCTO_ELIMINADO_EXITO = 'PRODUCTO_ELIMINADO_EXITO',
export const PRODUCTO_ELIMINADO_ERROR = 'PRODUCTO_ELIMINADO_ERROR'