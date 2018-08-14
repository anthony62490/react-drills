import React, { Component } from 'react';
import '../App.css';

class MirrorBox extends Component 
{
    constructor()
    {
      super()
      this.state =
      {
        text: ''
      };
  
      this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(val)
    {
      this.setState({ text: val.target.value });
    }

    render()
    {
        return(
            <div class='App'>
                <input type='text' onChange={(x)=> this.handleInput(x)} />
                <br/>
                <span>{this.state.text}</span>
            </div>
        ); //return
    }
}

export default MirrorBox;