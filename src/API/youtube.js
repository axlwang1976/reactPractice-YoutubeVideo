import axios from 'axios';

const KEY = 'AIzaSyDdjGCYdUJtZ1OX55gb2l5O3KqYNn_xIFg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    part: 'snippet',
    key: KEY
  }
});
