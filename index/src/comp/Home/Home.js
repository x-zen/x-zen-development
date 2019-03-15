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
          <a href='https://github.com/x-zen' target='_blank'><i class="fab fa-github-square"></i></a>
          <a href='https://www.linkedin.com/in/zen-harris-979772180' target='_blank'><i class="fab fa-linkedin"></i></a>
          <a href='https://twitter.com/zen_stuff' target='_blank'><i class="fab fa-twitter-square"></i></a>
          <a href='https://www.facebook.com/profile.php?id=100009471423841' target='_blank'><i class="fab fa-facebook-square"></i></a>
          <a href='mailto:jdharris.x@gmail.com' target='_blank'><i class="fas fa-envelope-square"></i></a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
