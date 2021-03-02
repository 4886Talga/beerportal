import logo from './images/talgalogo.png';
import React, { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Form />
      </>
    )
  }
}

export default App

