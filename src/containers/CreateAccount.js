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
      password: ''
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
    const newUser = await addNewUser(this.state);
    this.props.handleSubmit(newUser)
  }

  render() {
    return (
      <div className="new-user">
        <h1>Create New Account Here</h1>
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
          <button className="create-account-button">Create Account</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  handleSubmit: (newUser) => dispatch(createAccount(newUser))
}

export default connect(null, mapDispatchToProps)(CreateAccount)