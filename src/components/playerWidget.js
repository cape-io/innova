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
    let { track, playing, currentTime, duration } = this.props

    if (!track) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <PlayButton className="sb-soundplayer-play-btn" {...this.props} />
        <span className="track-title">{track.title}</span>
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
