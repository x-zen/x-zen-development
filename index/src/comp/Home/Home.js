import React from 'react';

import zenTop from './zen.jpg';

import './Home.css'

const Home = ({props}) => (
  <div className='cont'>
    <div className='box'>
      <div className='img-box'>
        <img className='img' src={zenTop} alt='headshot of zen'/>
      </div>

      <div className='text-box'>
        <h2>Zen Harris</h2>
        <div className='hr'><hr/></div>
        <h3>Front-End Web Developer</h3>
      </div>

      <div className='social-box'>
        <h3>Find me on the web!</h3>

        <div className='links'>
          <i class="fab fa-github-square"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
