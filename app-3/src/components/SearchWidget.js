import React from 'react';
import '../App.css';

function SearchWidget(props)
{
    let formArr = props.clientList.filter((x, i)=> {
        return(x.includes(props.userInput));
    }).map((client, i)=>(<h3 key={i}>{client}</h3>));

    return(
        <div className="real-time-search">
            <input value={props.input} onChange={(x)=> props.handleInput(x)} />
            {formArr}
        </div>
    ); //return
}

export default SearchWidget;