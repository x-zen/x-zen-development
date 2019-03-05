import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './comp/Navigation/Navigation.js';
import Home from './comp/Home/Home.js';
import Projects from './comp/Projects/Projects.js';
import Docs from './comp/Docs/Docs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
        <Route path='/docs' Component={Docs} />

        <Navigation />

        <div class='container'>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
