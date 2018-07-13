import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const renderedApp = (<Provider store={store}>
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                     </Provider>);
render(renderedApp,
  document.getElementById('root')
);