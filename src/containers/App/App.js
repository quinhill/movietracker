import React, { Component } from 'react';
import './App.css';
import MovieList from '../../components/MovieList';
import { fetchNowPlaying } from '../../ApiCall';
import { addNowPlaying } from '../../actions/'
import { connect } from 'react-redux';
import Header from '../../components/Header';

class App extends Component {
  constructor(props) {
    super(props)
  }

  
  componentDidMount = async () => {
    const movieData = await fetchNowPlaying()
    this.props.handleFetch(movieData)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
})

export const mapDispatchToProps = (dispatch) => ({
  handleFetch: (nowPlaying) => dispatch(addNowPlaying(nowPlaying))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)