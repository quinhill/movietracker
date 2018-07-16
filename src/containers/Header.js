import React from 'react';
import Login from '../containers/Login';
import './header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import PropTypes from 'prop-types';

export const Header = (props) => {
  let favorites;
  let welcome;
  let logout;
  if (props.user.name) {
    welcome =
      <h3 className="welcome-text">
        {`Welcome ${props.user.name.split(' ')[0]}`}
      </h3>;
    logout = 
      <NavLink 
        onClick={props.handleLogOut}
        className="navlink logout-button"
        to='/'
      >
        Log out
      </NavLink>;
      favorites = <NavLink 
            className="navlink favorites-button"
            to="/favorites"
          >
            favorites
          </NavLink>
  } else if (props.user.message) {
    welcome = <h3>{props.user.message}</h3>;
  }

  return (
    <div className="header">
      <div className="welcome-favorites-div">
        {welcome}
        <div className="button-div">
          {logout}
          {favorites}
        </div>
      </div>
      <NavLink className="title" to='/'>
        <div className="title">
        </div>
      </NavLink>
      <div className="login">
        <Login />
      </div>
    </div>
  );
};

Header.Proptypes = {
  user: PropTypes.object
};

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);