import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList';
import { fetchNowPlaying } from '../../ApiCall';
import { addNowPlaying } from '../../actions/'
import { connect } from 'react-redux';
import Header from '../../components/Header';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { CreateAccount } from '../CreateAccount';

class App extends Component {

  componentDidMount = async () => {
    const movieData = await fetchNowPlaying()
    this.props.handleFetch(movieData)
  }


  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Route exact path='/' component={MovieList} /> 
        <Route exact path='/createAccount' render={() => <CreateAccount/>} />
      </div>
    );
  }
}

App.Proptypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.object),
  handleFetch: PropTypes.func
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
})

export const mapDispatchToProps = (dispatch) => ({
  handleFetch: (nowPlaying) => dispatch(addNowPlaying(nowPlaying))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))