import React, { Component } from 'react';
import './App.css';
// import SearchWidget from './components/SearchWidget'

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

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(x)
  {
    this.setState({ userInput: x.target.value });
  }

  render() {
    let copy = this.state.clientList.slice();
    console.log(copy);
    let filter = copy.filter((x,i)=> (x.toLowerCase().includes(this.state.userInput)));
    console.log(filter);
    let clientBlock = filter.map((x,i)=>(<p key={i}>{x}</p>));

    return (
      <div className="puzzleFeed">
        <input className="inputLine" onChange={(x)=>this.handleInput(x)} value={this.state.userInput}/>
        <span className="resultsBox">{clientBlock}</span>
      </div>
    );
  }
}

export default App;
