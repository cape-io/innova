import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import domready from 'domready'
import App from './App'
import configureStore from './configureStore'

domready( () => {
  const devEnv = !window.Drupal
  // Define our inital state object.
  const initialState = { settings: {} }
  // This is created by drupal.
  if (devEnv) {
    window.Drupal = { settings: {
      album: {
        soundcloudTrack: 'https://soundcloud.com/innovadotmu/epic-soda'
      },
      frontPage: true
    } }
  }
  const { album, frontPage } = window.Drupal.settings
  initialState.settings.frontPage = frontPage || false
  initialState.settings.album = album || {}
  console.log(initialState)
  const store = configureStore(initialState)
  window.app = { getState: store.getState }
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react')
  )
})
