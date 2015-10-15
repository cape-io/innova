import React, { Component } from 'react';
import { SUPER_NICE } from './colors';
import Youtube from './containers/Youtube';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Youtube />
      </div>
    );
  }
}
