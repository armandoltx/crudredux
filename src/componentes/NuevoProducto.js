import React, { useState } from 'react';

// REDUX

import { crearNuevoProductAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

const NuevoProducto = () => {

  // state
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState('');

  // Crear Nuevo Producto
  const dispatch = useDispatch();
  const agregarProducto = (producto) => dispatch(crearNuevoProductAction(producto) )

  // Agregar Nuevo Producto
  const submitNuevoProducto = (e) => {
    // prevenir q el formulario cambie de pag
    e.preventDefault();

    agregarProducto({
      nombre, precio
    });

    // Validar el dormulario
    if(nombre.trim() === '' || precio.trim() === '') {
      return;
    }

    // Crear nuevo producto

    // Redireccionar
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;