import React, {Component} from 'react'
import {connect} from 'react-redux'

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

  submitAccount = (e) => {
    e.preventDefault()
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
            type="text" 
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
          />
        </form>
      </div>
    )
  }
}
