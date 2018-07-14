import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions'
import { checkForUser } from '../ApiCall'
import './login.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { fetchFavorites } from '../ApiCall';
import { makeFavorites } from '../actions';


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
    const fetchAccount = await checkForUser(userInfo);
    if(fetchAccount === undefined) {
      this.setState({
        errorMessage: 'Username and password did not match'
      })
    } else {
      this.props.handleSubmit(fetchAccount)
      const favorites = await fetchFavorites(fetchAccount.id);
      this.props.handleFetchFavs(favorites)
    }
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitAccount}>
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
          <p>{this.state.errorMessage}</p>
          <NavLink className="create-account" to='/createAccount'>
            or Create Account
          </NavLink>
        </form>
      </div>
    )
  }
}

Login.Proptypes = {
  handleSubmit: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(logIn(user)),
  handleFetchFavs: (favorites) => dispatch(makeFavorites(favorites)) 
})

export default connect(null, mapDispatchToProps)(Login)
