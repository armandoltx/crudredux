import React, { useState } from 'react';

// REDUX
import { crearNuevoProductAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';
// useSelector es lo q usamos para acceder al state de redux

const NuevoProducto = ({history}) => {

  // state
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState('');

  // Crear Nuevo Producto
  const dispatch = useDispatch();
  const agregarProducto = (producto) => dispatch( crearNuevoProductAction(producto) );
  const validarFormulario = () => dispatch( validarFormularioAction() );
  const exitoValidacion = () => dispatch(validacionExito() );
  const errorValidacion = () => dispatch(validacionError() );

  // === Obtener los datos del state
  // accedemos a la parte del state q nos interesa
  // para ello usamos dev tools para ver como acceder al state en este caso: state.error.error
  const error = useSelector((state) => state.error.error);

  // Agregar Nuevo Producto
  const submitNuevoProducto = (e) => {
    // prevenir q el formulario cambie de pag
    e.preventDefault();

    validarFormulario();


    // Validar el dormulario
    if(nombre.trim() === '' || precio.trim() === '') {
      console.log('hay un error');
      errorValidacion();
      return;
    }

    // Si pasa la validacion
    exitoValidacion();

    // Crear nuevo producto
    agregarProducto({
      nombre, precio
    });

    // Redireccionar  ==> para ello usamos react router dom y pasando history como parametro a NuevoProducto
    history.push('/');
  }

  // cuando presionamos el boton "agregar" del formulario:
  // ejecutamos la funcion submitNuevoProducto
  // esta funcion ejecuta agregarProducto
  // gracias al dispatch la funcion agregarProducto se conecta a la accion
  // y manda a llamar la accion crearNuevoProductAction
  // esta accion con el dispatch llama a la funcion nuevoProducto
  // que con el type esta conectara al reducer, a la parte del type
  // y cambia el state segun el reducer diga. En este caso no cambia nada


  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
              <form onSubmit={submitNuevoProducto}>
                <div className="form-group">
                  <label>Nombre Libro</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Libro"
                    value={nombre}
                    onChange={ e => guardarNombre(e.target.value) }
                  />
                </div>
                <div className="form-group">
                  <label>Precio Libro</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio Libro"
                    value={precio}
                    onChange={ e => guardarPrecio(e.target.value) }
                  />
                </div>

                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
              </form>

              { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;