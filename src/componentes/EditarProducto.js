import React, { useEffect } from 'react';

//REDUX
import { useDispatch } from 'react-redux';
import { obtenerProductoEditarAction } from '../actions/productosActions';

const EditarProducto = ({ match }) => {

  // Dispatch Para Llamar a las acciones
  const dispatch = useDispatch();

  // Obtener el Id
  const { id } = match.params;
  // gracias a React Router Dom se agregan una serie de props
  // este match se puede ver en la consola de componentes en google chrome
  // busca el componente inspeccionalo y veras q en los props te aparece match con la id

  // tenemos q usar un useEffect para llamar a la Accion, pq necesitamos que el componente cargue y este listo.
  useEffect(() => {
    dispatch(obtenerProductoEditarAction(id))
  }, [dispatch, id]); // pasan a ser dependencias tanto dispatch como id para q esto ocurra cuando esto cambia

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