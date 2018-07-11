import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'
import App from './Components/App/App'

const store = createStore(rootReducer)

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)