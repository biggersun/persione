/* global window document:true*/

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import reducer from './reducers'
import App from './containers/App';

injectTapEventPlugin();
// var middleware = [ thunk, logger()]
// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

// store.dispatch(getAllProducts()) //getAllProducts : 异步action

render(
  <App />,
  document.getElementById('root'),
)
