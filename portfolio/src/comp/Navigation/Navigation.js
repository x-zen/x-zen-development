import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header class='nav'>
        <div class='nav-logo'>
          <h1>x-zen</h1>
        </div>

        <nav class='nav-link'>
          <Link to="/" class='nav-item'>Home</Link>
          <Link to="/projects" class='nav-item'>Blog</Link>
          <Link to="/docs" class='nav-item'>Docs</Link>
        </nav>
      </header>
    );
  };
};

export default Navigation;
