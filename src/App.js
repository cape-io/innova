import React, { Component } from 'react'
import Youtube from './containers/Youtube'
import Soundcloud from './containers/soundcloud'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Youtube />
        <Soundcloud />
      </div>
    )
  }
}
