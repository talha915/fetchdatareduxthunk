import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
console.log("STore", store.getState());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>        
      </Provider>
    );
  }
}

export default App;
