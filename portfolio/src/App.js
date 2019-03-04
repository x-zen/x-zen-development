import React, { Component } from 'react';
import './App.css';
import Navigation from './comp/Navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div class='container'>
          <p>app</p>
        </div>
      </div>
    );
  }
}

export default App;
