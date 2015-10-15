import React, { Component, PropTypes } from 'react';
import Video from './Video';

class Youtube extends Component {
  componentDidMount() {
    this.props.fetchItems({
      playlistId: 'UUEC1Deur1BSCtznxH3nP2WQ',
      key: 'AIzaSyDu7__FOqyJTEPC68dW_Oq-hwRySPZGpDI',
      maxResults: '3',
    });
  }
  render() {
    const {items, isFetching} = this.props;
    const headerMsg = `${isFetching ? 'Loading ' : '' }Videos`;
    return (
      <div>
        <h3>{headerMsg}</h3>
        {items.map(item => <Video {...item} key={item.videoId} />)}
      </div>
    );
  }
}
Youtube.propTypes = {
  items: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
Youtube.defaultProps = {};

export default Youtube;
