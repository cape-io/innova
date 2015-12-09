import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

export class App extends Component {
  render() {
    return (
      <SoundPlayerContainer
        clientId="416cb3f3e2a04d5ec901dba6f94aaa49"
        resolveUrl={String}
        streamUrl={String}
        onStartTrack={Function}
        onStopTrack={Function}
      >
      {/*Children get props full of useful data!*/}
      </SoundPlayerContainer>
    )
  }
}
