import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

class App extends Component 
{
  constructor()
  {
    super();
    this.state =
    {
      taskList: [],
      userInput: ''
    }
  }

  buttonOnClickEvent()
  {
    //copy old array
    let newArr = this.state.taskList.slice(0);
    newArr.push(this.state.userInput);
    this.setState({taskList:newArr, userInput:''});
  }

  render() 
  {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e) => this.setState({userInput: e.target.value})} value={this.state.userInput} />
        <button onClick={() => this.buttonOnClickEvent() }>Add</button>
        {
          this.state.taskList.map( (e, i) =>
            <Todo item={e} key={i} />
          )
        }
      </div>
    ); //return
  }
}

export default App;
