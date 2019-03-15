import React from 'react';

import './AboutMe.css';

const AboutMe = ({props}) => (
  <div className='cont'>
    <div className='box'>
      <div className='box-1'>
        <h2>Some Technologies I Use</h2>
        <div className='icon-box'>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-font-awesome-flag"></i>
          <i class="fab fa-git"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-less"></i>
        </div>
      </div>

      <div className='box-1'>
        <h2>Education</h2>

        <div className='card'>
          <h3>Lambda School</h3>
          <div className='hr'><hr/></div>
          <h4>Full-Stack Web Development</h4>
          <div className='hr'><hr/></div>
          <p>Jan 2019 - Present</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
