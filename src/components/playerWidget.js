import React, { Component, PropTypes } from 'react'
import { PlayButton, Progress } from 'react-soundplayer/components'

class PlayerWidget extends Component {
  play() {
    let { soundCloudAudio, playing } = this.props
    if (playing) {
      soundCloudAudio.pause()
    } else {
      soundCloudAudio.play()
    }
  }
  render() {
    const { track, currentTime, duration } = this.props

    if (!track) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <PlayButton
          {...this.props}
          className="sb-soundplayer-play-btn"
        />
      <span className="track-title" style={{ paddingLeft: '10px' }}>
          {track.title}
        </span>
        <Progress
          className="mt1 mb1 rounded"
          innerClassName="rounded-left"
          value={currentTime / duration * 100 || 0}
          {...this.props}
        />
      </div>
    )
  }
}
PlayerWidget.propTypes = {
  track: PropTypes.object,
  playing: PropTypes.bool
}
export default PlayerWidget
