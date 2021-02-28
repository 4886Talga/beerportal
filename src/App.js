import logo from './images/talgalogo.png';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
    
    </div>
    )
  }
}

export default App

