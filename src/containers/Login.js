import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn, addNowPlaying, makeFavorites } from '../actions'
import { checkForUser } from '../ApiCall'
import './login.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { fetchFavorites } from '../ApiCall';
import { checkForFavorites, cleanFavorites } from '../cleaner';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  submitAccount = async (e) => {
    e.preventDefault()
    const userInfo = { 
      email: this.state.email, 
      password: this.state.password 
    };
    this.setState({
      email: '',
      password: '',
      errorMessage: ''
    })
    const fetchAccount = await checkForUser(userInfo);
    if(fetchAccount === undefined) {
      this.setState({
        errorMessage: 'Username and password did not match'
      })
    } else {
      this.props.handleSubmit(fetchAccount)
      let favorites = await fetchFavorites(fetchAccount.id);
      favorites = cleanFavorites(favorites)
      this.props.handleFetchFavs(favorites)
      const newFavorites = checkForFavorites(this.props.nowPlaying, favorites)
      this.props.handleAddFavs(newFavorites);
    }
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
          <button className="submit-button">Log in</button>
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
    )
  }
}

Login.Proptypes = {
  handleSubmit: PropTypes.func
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying
})

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(logIn(user)),
  handleFetchFavs: (favorites) => dispatch(makeFavorites(favorites)),
  handleAddFavs: (newFavorites) => dispatch(addNowPlaying(newFavorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
