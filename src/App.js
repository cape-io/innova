import React, { Component } from 'react'
import Youtube from './containers/Youtube'
import soundcloud from './containers/soundcloud'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Youtube />
        <soundcloud />
      </div>
    )
  }
}
