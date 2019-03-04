import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header class='nav'>
        <div class='nav-logo'>
          <h1>x-zen</h1>
        </div>

        <nav class='nav-link'>
          <a href="#" class='nav-item'>Home</a>
          <a href="#" class='nav-item'>Blog</a>
          <a href="#" class='nav-item'>X</a>
        </nav>
      </header>
    );
  };
};

export default Navigation;
