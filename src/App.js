import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';

import Result from './containers/Result';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Result />
      </div>
    </Provider>
  );
}

export default App;
