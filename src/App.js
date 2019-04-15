import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import configureStore from './store'

const { store } = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Home path="/" />
    </Router>
  </Provider>
)

export default App
