import React, { Component } from 'react';
import './App.css';
import {fetchNowPlaying} from '../../ApiCall'
import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import { addMovie } from '../../actions';


class App extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: []
    }
    
    
  }

  componentDidMount = async () => {
    const nowPlaying = await fetchNowPlaying()
    const movie = nowPlaying[1];
    console.log(addMovie(movie))
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
