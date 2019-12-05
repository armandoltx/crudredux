import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Componentes
import Header from './componentes/Header';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos';
import EditarProducto from './componentes/EditarProducto';



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
          {/* todo lo q este fuera de este switch va a estar  en todas las paginas y lo que este dentro va a ser exclusivo de cada una de las paginas ej componentes*/}
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
