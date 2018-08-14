import React, { Component } from 'react';
import './App.css';
import SearchWidget from './components/SearchWidget'

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      userInput: '',
      clientList: ["Opal", "Kole", "Miller", "Beccaa", "Moss", "Singh", "Barbar", 
      "Kylee", "Nola", "Joycelyn", "Lashawnda", "Trinh", "Kizzie", "Jacquline", 
      "Grayce", "Augustus", "Erick", "Thelma", "Ma", "Gina", "Willis", "Lovella", 
      "Becki", "Luella", "Francoise", "Shirlene", "Claude", "Guy", "Mechelle", 
      "Odilia", "Kena", "Anissa", "Jaqueline", "Jacquelyn", "Elfriede", "Vanita", 
      "Christin", "Franklyn", "Jerry", "Florentina", "Kieth", "Kris", "Eugene", 
      "Alvaro", "Genia", "Lemuel", "Gena", "Karon", "Genoveva", "Clotilde", "Max", 
      "Bryant", "Steve", "Vanetta", "Antonina", "Courtney", "Melody", "Paul"],
    };
  }

  handleInput = (x) =>
  {
    this.setState({userInput: x.target.value});
  }

  render() {
    return (
      <div className="App">
        <SearchWidget 
          handleInput={this.handleInput}
          userInput={this.state.userInput}
          clientList={this.state.clientList}
        />
      </div>
    );
  }
}

export default App;
