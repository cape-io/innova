import React, { PropTypes } from 'react';

function Video({thumbnail, videoId, title}) {
  const url = `https://www.youtube.com/embed/${videoId}?width=500&height=500&iframe=true`;
  return (
    <div className="youtube-thumb thumbnail init-colorbox-load-processed cboxElement">
      <a className="colorbox-load" href={url} title={title}>
        <img src={thumbnail.url} width="130" alt={title} />
      </a>
    </div>
  );
}
Video.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  videoId: PropTypes.string.isRequired,
};
Video.defaultProps = {};

export default Video;
