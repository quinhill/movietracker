import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAccount } from '../actions'
import { addNewUser } from '../ApiCall'
import './login.css'
import PropTypes from 'prop-types';


export class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
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
    const postAccount = await addNewUser(this.state)
    this.props.handleSubmit(this.state.userName, this.state.password)
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitAccount}>
          <input
            className="username" 
            type="email" 
            value={this.state.userName}
            onChange={this.handleChange}
            name='userName'
            placeholder="username"
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
      </div>
    )
  }
}

Login.Proptypes = {
  handleSubmit: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (userName, password) => dispatch(createAccount(userName, password))
})

export default connect(null, mapDispatchToProps)(Login)