import React from 'react'
import '../App.css'

function List(props)
{
  let displayList = props.arr.map((item, i)=>
  {
    return(
        <li key={'li'+i}>
          <p key={'p'+i}>{item}</p>
        </li>
    )
  });//map

  return(
    <ul>
      {displayList}
    </ul>
  ); //return
}

export default List;