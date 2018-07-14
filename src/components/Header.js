import React from 'react';
import Login from '../containers/Login';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';

export const Header = (props) => {
  let welcome;
  if(props.user.name) {
    welcome =
    <div>
      <h3>{`Welcome ${props.user.name.split(' ')[0]}`}</h3>
      <button onClick={props.handleLogOut}>Log out</button>
    </div>
  } else if(props.user.message) {
    welcome = <h3>{props.user.message}</h3>
  }
  return (
    <div className="header">
      {welcome}
      <Link className="title" to='/'>
        <div className="title">
        </div>
      </Link>
      <div>
        <Login />
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)