import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component 
{
  constructor()
  {
    super();
    this.state = 
    {
      userName: "",
      userPass: ""
    };

    this.handleInput =  this.handleInput.bind(this);
    this.handleClick =  this.handleClick.bind(this);
  }

  handleInput(userin, isName)
  {
    console.log(userin);
    switch(isName)
    {
      case 0:
        this.setState({userName: userin.target.value});
        break;
      case 1:
        this.setState({userPass: userin.target.value});
        break;
    }
  }

  handleClick()
  {
    const { userName, userPass } = this.state;
    alert(`Username: ${userName} Password: ${userPass}`);
  }

  render() 
  {
    return (
      <div className="App">
        <input onChange={(e)=> this.handleInput(e, 0) } value={this.state.userName}/>
        <input onChange={(e)=> this.handleInput(e, 1) } value={this.state.userPass}/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default App;
