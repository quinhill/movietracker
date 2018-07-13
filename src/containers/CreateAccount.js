import React, { Component } from 'react';
import { addNewUser } from '../ApiCall';
import { connect } from 'react-redux';
import { createAccount } from '../actions';
import './create-account.css';

export class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      errorMessage: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitAccount = async (e) => {
    e.preventDefault()
    const { password, repeatPassword } = this.state;
    if (password === repeatPassword) {
      const newUser = await addNewUser(this.state);
      this.props.handleSubmit(newUser)
    } else {
      const errorMessage = 'Your password does not match the repeated password'
      this.setState({ errorMessage })
    }
  }

  render() {
    return (
      <div className="new-user">
        <h1>Create an account and start tracking your favorite movies!</h1>
        <form className="account-form" onSubmit={this.submitAccount}>
          <input 
            className="user-form"
            type="text" 
            name="name" 
            placeholder="full name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            className="user-form"
            type="email" 
            name="email" 
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input 
            className="user-form"
            type="password" 
            name="password" 
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            className="user-form"
            type="password"
            name="repeatPassword"
            placeholder="repeat password"
            value={this.state.repeatPassword}
            onChange={this.handleChange}
          />
          <button 
            className="create-account-button">
            Create Account
          </button>
          <h4 className="error-message">
            {this.state.errorMessage}
          </h4>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  handleSubmit: (newUser) => dispatch(createAccount(newUser))
}

export default connect(null, mapDispatchToProps)(CreateAccount)