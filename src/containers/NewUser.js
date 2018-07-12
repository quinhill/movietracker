import React, { Component } from 'react';

export class NewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="new-user">
        <h1>Create New Account Here</h1>
        <form>
          <input type="text" name="name" placeholder="full name"/>
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}