import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions'
import { checkForUser } from '../ApiCall'
import './login.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
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
    const fetchAccount = await checkForUser(this.state);
    this.props.handleSubmit(fetchAccount)
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
          <NavLink className="create-account" to='/createAccount'>
            Create Account
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
  handleSubmit: (user) => dispatch(logIn(user))
})

export default connect(null, mapDispatchToProps)(Login)
