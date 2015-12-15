import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './configureStore'

const devEnv = !window.Drupal
// Define our inital state object.
const initialState = { settings: {} }
// This is created by drupal.
if (devEnv) {
  initialState.settings.frontPage = true
  initialState.settings.album = {
    soundcloudTrack: 'https://soundcloud.com/innovadotmu/epic-soda'
  }
}
else {
  initialState.settings.frontPage = window.Drupal.frontPage || false
  initialState.settings.album = window.Drupal.settings.album || {}
}

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react')
)

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./createDevToolsWindow')(store)
}
