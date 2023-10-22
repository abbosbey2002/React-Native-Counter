import React, { useState } from 'react';
import Counter from './components/Counter';
import store from "./context/store"
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
    <Counter  />
    </Provider>
  );
};



export default App;