import React from 'react';
import { Login } from '../containers/Login';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="title">
      </div>
      <div>
        <Login />
      </div>
    </div>
  )
}

export default Header