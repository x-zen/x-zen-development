import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './comp/NavBar/NavBar.js';
import Home from './comp/Home/Home.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
