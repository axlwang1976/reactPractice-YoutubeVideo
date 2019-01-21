import { combineReducers } from 'redux';

const videosReducer = videos => {
  return videos;
};

const selectedReducer = (selectedVideo = null, action) => {
  if (action.type === 'VIDEO_SELECTED') {
    return action.payload;
  }
  return selectedVideo;
};

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedReducer
});
