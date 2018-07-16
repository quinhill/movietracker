import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, addFavorites } from '../actions';
import { checkForUser, fetchFavorites } from '../ApiCall';
import './login.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { cleanFavorites } from '../cleaner';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  submitAccount = async (event) => {
    event.preventDefault()
    const user = await checkForUser(this.state)
    this.props.handleSubmit(user)
    const favorites = await fetchFavorites(user.id)
    const cleanedFavs = cleanFavorites(favorites)
    this.mapInFavs(cleanedFavs)
  }

  mapInFavs = (favorites) => {
    const { nowPlaying } = this.props;
    const addedFavs = nowPlaying.map(movie => {
      favorites.find(favorite => {
        favorite.id == movie.id
        return movie.favorite = true
      })
      return movie;
    })
    this.props.handleFavorites(addedFavs)
  }

  render() {
    return (
      <div className="login">
        <form 
          onSubmit={this.submitAccount}
          className="login-form"
        >
          <input
            className="username" 
            type="email" 
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
            placeholder="email"
          />
          <input 
            className="password"
            type="password" 
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
            placeholder="password"
          />
          <button 
            className="submit-button"
          >
            Log in
          </button>
        </form>
        <div className="create-account-div">
          <p className="error-message">
            {this.state.errorMessage}
          </p>
          <NavLink 
            className="create-account" 
            to='/createAccount'
          >
            or Create Account
          </NavLink>
        </div>
      </div>
    );
  }
}

Login.Proptypes = {
  handleSubmit: PropTypes.func
};

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(logIn(user)),
  handleFavorites: (favorites) => dispatch(addFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);