import React, { Component } from 'react';
import './App.css';
import {fetchNowPlaying} from '../../ApiCall'
import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import { connect } from 'react-redux';
import { addMovies } from '../../actions';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: []
    }
    
    
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

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: async (fetchNowPlaying) => dispatch(addMovies(await fetchNowPlaying()))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

