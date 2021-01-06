import React, { useState } from 'react';
import './css/App.css';
import Game from './components/Game';

const App = () => {

  const [gameStart, setStart] = useState(false);

  return (
    <div className="App">
      <h1 className="App__header">Hangman Game <br/><span className="App__header--sub">Movie Edition</span></h1>
      {gameStart ?  
        <Game setStart={setStart} /> :
        <button className='btn' onClick={() => setStart(true)}>Start Game</button>
      }
    </div>
  );
}

export default App;
