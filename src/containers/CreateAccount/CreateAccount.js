import React, { Component } from 'react';
import { addNewUser } from '../../thunks/ApiCall';
import { connect } from 'react-redux';
import { createAccount } from '../../actions';
import './create-account.css';
import PropTypes from 'prop-types';

export class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitAccount = (event) => {
    event.preventDefault();
    let errorMessage;
    const { 
      password, 
      repeatPassword, 
      name, 
      email
    } = this.state;
     
    if (password !== repeatPassword) {
      errorMessage = 'Your password does not match the repeated password';
      this.setState({ errorMessage });
    } else if (name.split(' ').length < 2) {
      errorMessage = 
        'Please make sure you have entered your first and last name';
      this.setState({ errorMessage });
    } else if (!email) {
      errorMessage = 'Please make sure you have entered your email address';
      this.setState({errorMessage});
    } else {
      this.createNewUser();
    }
  }

  createNewUser = async () => {
    const user = await addNewUser(this.state);
    if (user.error) {
      const errorMessage = user.error.split('=')[1];
      this.setState({
        errorMessage 
      });
    } else {
      this.props.handleSubmit(user);  
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
    );
  }
}

CreateAccount.propTypes = {
  user: PropTypes.object,
  handleSubmit: PropTypes.func
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(createAccount(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);