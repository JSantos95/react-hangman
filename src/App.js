import React, { useState } from 'react';
import './css/App.css';
import Game from './components/Game';

const App = () => {

  const [gameStart, setStart] = useState(false);

  return (
    <div>
      <h1>Hangman Movie Title Game!</h1>
      {gameStart?  
        <Game setStart={setStart} /> :
        <button onClick={() => setStart(true)}>Start Game</button>
      }
      
    </div>
  );
}

export default App;
