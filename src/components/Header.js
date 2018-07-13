import React from 'react';
import { Login } from '../containers/Login';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
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

export default Header