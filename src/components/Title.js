import React from 'react';

const Title = (props) => {
  return (
    <div className="title">
      {props.status === 'Winner!' ?
        <h1 className="title__header">{props.status} <span className="title__header--sub">{props.title}</span> Was The Correct Movie Title</h1> :
        <h1 className="title__header">{props.status} <span className="title__header--sub">{props.title}</span> Was The Correct Movie Title</h1> 
      }
      <button className='btn' onClick={() => props.setStart(false)}>New Game</button>
    </div>
  )
}

export default Title;
