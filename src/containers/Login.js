import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAccount } from '../actions'
import { postNewAccount } from '../ApiCall'

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
    const postAccount = await postNewAccount(this.state)
    this.props.handleSubmit(this.state.userName, this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitAccount}>
          <input 
            type="text" 
            value={this.state.userName}
            onChange={this.handleChange}
            name='userName'
          />
          <input 
            type="password" 
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (userName, password) => dispatch(createAccount(userName, password))
})

export default connect(null, mapDispatchToProps)(Login)