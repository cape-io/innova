import React, { Component, PropTypes } from 'react'

class playerWidget extends Component {
  play() {
    let { soundCloudAudio, playing } = this.props
    if (playing) {
      soundCloudAudio.pause()
    } else {
      soundCloudAudio.play()
    }
  }
  render() {
    let { track, playing } = this.props

    if (!track) {
      return <div>Loading...</div>
    }

    return (
      <div>
          <h2>{track.title}</h2>
          <h3>{track.user.username}</h3>
          <button onClick={this.play.bind(this)}>
              {playing ? 'Pause' : 'Play'}
          </button>
      </div>
    )
  }
}
playerWidget.propTypes = {
  track: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
}
export default playerWidget
