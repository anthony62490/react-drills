import React, { Component } from 'react';
import List from './components/list';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {arr: [ "banana", "pineapple", "apple", "salad", "carrot", "tomato" ]};
  }

  render() 
  {
    return (
      <div className="App">
        <List arr={this.state.arr} />
      </div>
    );
  }
}

export default App;
