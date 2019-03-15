import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './comp/NavBar/NavBar.js';
import Home from './comp/Home/Home.js';
import AboutMe from './comp/AboutMe/AboutMe.js';
import Projects from './comp/Projects/Projects.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;
