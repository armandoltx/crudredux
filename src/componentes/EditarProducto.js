import React, { useEffect } from 'react';

//REDUX
import { useDispatch } from 'react-redux';
import { obtenerProductoEditarAction } from '../actions/productosActions';

const EditarProducto = () => {

  // Dispatch Para Llamar a las acciones
  const dispatch = useDispatch();

  // tenemos q usar un useEffect para llamar a la Accion, pq necesitamos que el componente cargue y este listo.
  useEffect(() => {
    dispatch(obtenerProductoEditarAction())
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Editar Producto</h2>
              <form>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                  />
                </div>

                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;