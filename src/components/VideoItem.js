import React from 'react';
import './VideoItem.scss';

const VideoItem = props => (
  <div
    className="item video-item"
    onClick={() => props.onVideoSelect(props.video)}
  >
    <img
      className="ui image"
      src={props.video.snippet.thumbnails.medium.url}
      alt={props.video.snippet.title}
    />
    <div className="content">
      <div className="header">{props.video.snippet.title}</div>
    </div>
  </div>
);

export default VideoItem;
