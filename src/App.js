import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Youtube from './containers/Youtube'
import Soundcloud from './containers/soundcloud'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const { frontPage, album } = state.settings
  return { frontPage, album }
}

class App extends Component {
  render() {
    const { album, frontPage } = this.props
    console.log(album, frontPage)
    return (
      <div className="container">
        { frontPage && <Youtube /> }
        { album && album.soundcloudTrack &&
          <Soundcloud resolveUrl={album.soundcloudTrack} />
        }
      </div>
    )
  }
}
App.propTypes = {
  album: PropTypes.object.isRequired,
  frontPage: PropTypes.bool.isRequired
}
export default connect(mapStateToProps)(App)
