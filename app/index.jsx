import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from './containers/App/App.jsx'

const container = document.getElementById('container')

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    container
  )

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/App.jsx', () => {
    render(App)
  })
}
