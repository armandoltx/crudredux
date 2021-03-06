import React, { useEffect, Fragment, useRef } from 'react';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

// useSelector es lo que nos permite acceder al state
import { obtenerProductoEditarAction, editarProductoAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';

const EditarProducto = ({ history, match }) => {

  // Crear los refs y los agregamos al formulario para acceder a los valores

  const nombreRef = useRef(''); // su valor de inicio sera un string vacio
  const precioRef = useRef(''); // su valor de inicio sera un string vacio

  //=== Dispatch Para Llamar a las acciones
  const dispatch = useDispatch();

  // == creamos un alias para editarProductoAction
  const editarProducto = (producto) => dispatch(editarProductoAction(producto));
  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  //=== Obtener el Id
  const { id } = match.params;
  // gracias a React Router Dom se agregan una serie de props
  // este match se puede ver en la consola de componentes en google chrome
  // busca el componente inspeccionalo y veras q en los props te aparece match con la id

  //=== tenemos q usar un useEffect para llamar a la Accion, pq necesitamos que el componente cargue y este listo.
  useEffect(() => {
    dispatch(obtenerProductoEditarAction(id))
  }, [dispatch, id]); // pasan a ser dependencias tanto dispatch como id para q esto ocurra cuando esto cambia

  //=== Acceder al state
  const producto = useSelector( state => state.productos.producto);
  // para saber como acceder al producto nos vamos a la pestana de redux en el browser y miramos el state.
  // veremos q se accede asi => "state.productos.producto"

  //=== Si hay un error
  const error = useSelector(state => state.productos.error);

  // cuando carga la API, nos da un error, pq no puede acceder al producto, pq va mas lenta la llamada a la API
  // nos da el error de q el producto no es defined
  if(!producto) return 'Cargando...';

  //=== Crear funcion onsubmit donde llamamos a la accion de editar el producto

  const submitEditarProducto = (e) => {
    // prevenimos el default behaviour del formulario
    e.preventDefault();

    //Valiar el formulario agragando los refs podemos acceder a los valores del formulario
    // console.log(nombreRef.current.value);
    // console.log(precioRef.current.value);
    validarFormulario();

    if (nombreRef.current.value.trim() === '' || precioRef.current.value.trim() === ''){
      errorValidacion();
      return;
    }

    // si no hay error
    exitoValidacion();


    // Guardar los cambios si no hay error
    editarProducto({
      // tenemos que pasar un objeto similar a los de la base de datos
      id,
      nombre: nombreRef.current.value,
      precio: precioRef.current.value
    });

    // redireccionar
    history.push('/');

  }





  return (
    <Fragment>
      {error
      ?
        <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error, intenta de nuevo!</div>
      :
        <div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center">Editar Producto</h2>
                  <form onSubmit={submitEditarProducto}>
                    <div className="form-group">
                      <label>Titulo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Titulo"
                        defaultValue={producto.nombre}
                        ref={nombreRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Precio del Producto</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Precio"
                        defaultValue={producto.precio}
                        ref={precioRef}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default EditarProducto;