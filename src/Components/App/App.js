import React, { Component } from 'react';
import './App.css';
import {fetchNowPlaying} from '../../ApiCall'
import MovieContainer from '../../containers/MovieContainer/MovieContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: []
    }
    
  }

  componentDidMount = async () => {
    const nowPlaying = await fetchNowPlaying()
    this.setState({nowPlaying})
  }
  render() {
    return (
      <div className="App">
        <MovieContainer 
          nowPlaying={this.state.nowPlaying}
        />
      </div>
    );
  }
}

export default App;
