import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Image src="https://i.redd.it/c9kb3q1kqaiz.jpg"/>
      </div>
    );
  }
}

export default App;
