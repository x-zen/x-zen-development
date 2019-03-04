import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div class='card'>
        <img src='../comp/Home/octocat.png' alt='Zen' />

        <h2>Hi, i'm Zen.</h2>

        <h3>I'm a student full stack web-dev over at Lambda School. I mess around in software development, hobby electronics, and changing the world. Have a look around at some of my projects, and find me on social media!></h3>

        <div class='social-links'>
          <i href='https://www.linkedin.com/in/zen-harris-979772180/' class="fab fa-linkedin"></i>
          <i href='https://github.com/x-zen' class="fab fa-github-square"></i>
          <i href='https://twitter.com/zen_stuff' class="fab fa-twitter-square"></i>
          <i href='https://www.facebook.com/profile.php?id=100009471423841' class="fab fa-facebook"></i>
        </div>
      </div>
    );
  }
}

export default Home;
