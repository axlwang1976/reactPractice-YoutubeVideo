import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onInputSubmit('front-end');
  }

  onInputSubmit = async inputValue => {
    const videos = await youtube
      .get('/search', {
        params: {
          q: inputValue
        }
      })
      .catch(err => console.log(err));

    this.setState({
      videos: videos.data.items,
      selectedVideo: videos.data.items[0]
    });
  };

  onVideoSelect = video => this.setState({ selectedVideo: video });

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
