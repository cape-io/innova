import React, { Component, PropTypes } from 'react'
import Video from './Video'

class Youtube extends Component {
  // innova channelId UC1dLyBjCAFz9tNxEr47zIEA
  // ACF UUEC1Deur1BSCtznxH3nP2WQ
  componentDidMount() {
    this.props.fetchItems({
      playlistId: 'UU1dLyBjCAFz9tNxEr47zIEA',
      key: 'AIzaSyDu7__FOqyJTEPC68dW_Oq-hwRySPZGpDI',
      maxResults: '3',
    })
  }
  render() {
    const { items, isFetching } = this.props
    const headerMsg = 'Loading videos...'
    return (
      <div>
        { isFetching ? <h3>{headerMsg}</h3> : false }
        { items.map(item => <Video {...item} key={item.videoId} />) }
      </div>
    )
  }
}
Youtube.propTypes = {
  items: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
Youtube.defaultProps = {}

export default Youtube
