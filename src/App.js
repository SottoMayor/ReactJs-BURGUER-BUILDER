import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is realy working!</p>
        <Person/>       
      </div>
    );
  }
}

export default App;
