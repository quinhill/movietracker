import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import { fetchNowPlaying } from '../../thunks/ApiCall';
import { addNowPlaying } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import CreateAccount from '../CreateAccount/CreateAccount';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

export class App extends Component {

  componentDidMount = async () => {
    const movieData = await fetchNowPlaying();
    this.props.handleFetch(movieData);
  }


  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Route exact path='/' component={MovieList} /> 
        <Route exact path='/createAccount' render={() => <CreateAccount/>} />
        <Route exact path='/favorites' component={FavoritesContainer} />
      </div>
    );
  }
}

App.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.object),
  handleFetch: PropTypes.func
};

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying
});

export const mapDispatchToProps = (dispatch) => ({
  handleFetch: (nowPlaying) => dispatch(addNowPlaying(nowPlaying))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));