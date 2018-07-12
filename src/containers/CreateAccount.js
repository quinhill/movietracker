import React, { Component } from 'react';
import { addNewUser } from '../ApiCall';
import { connect } from 'react-redux';
import { createAccount } from '../actions';

export class CreateAccount extends Component {
  constructor(props) {
    super(props)
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
        <form onSubmit={this.submitAccount}>
          <input 
            type="text" 
            name="name" 
            placeholder="full name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  handleSubmit: (newUser) => dispatch(createAccount(newUser))
}