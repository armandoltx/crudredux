import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <p>Crud con Redux</p>
    </Provider>
  );
}

export default App;
