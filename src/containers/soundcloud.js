import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import PlayerWidget from '../components/PlayerWidget'


class soundcloud extends Component {
  render() {
    return (
      <div>
        <SoundPlayerContainer
          clientId="416cb3f3e2a04d5ec901dba6f94aaa49"
          resolveUrl="https://soundcloud.com/innovadotmu/06-sally-ann"
        >
          <PlayerWidget />
        </SoundPlayerContainer>
      </div>
    )
  }
}
export default soundcloud
