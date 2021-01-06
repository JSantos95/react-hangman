import React from 'react';

const Title = (props) => {
  return (
    <div>
      {props.status === 'Winner!' ?
        <h1>{props.status} {props.title} Was The Correct Movie Title</h1> :
        <h1>{props.status}, {props.title} Was The Correct Movie Title</h1> 
      }
      <button onClick={() => props.setStart(false)}>New Game</button>
    </div>
  )
}

export default Title;
