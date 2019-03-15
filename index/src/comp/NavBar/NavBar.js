import React from 'react';

import './NavBar.css';

const NavBar = ({props}) => (
  <div className='nav'>
    <div className='nav-logo'>
      <h1>X-ZEN</h1>
    </div>

    <div className='nav-items'>
      <p className='nav-item'>foo</p>
      <p className='nav-item'>foo</p>
      <p className='nav-item'>foo</p>
    </div>
  </div>
);

export default NavBar;
