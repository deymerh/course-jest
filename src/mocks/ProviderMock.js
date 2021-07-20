import { createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import inicialState from '../initialState'
import reducer from '../reducers'

const store = createStore(reducer, inicialState)
const history = createBrowserHistory()

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
)
export default ProviderMock