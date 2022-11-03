import React from 'react';
import Dashboard from './src/screen/Dashboard';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/reducer/rootReducer';
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
