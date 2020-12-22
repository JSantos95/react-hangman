import React, { useState } from 'react';
import './css/App.css';
import './components/Game';

const App = () => {

  const [gameStart, setStart] = useState(false);

  return (
    <div>
      <h1>Hangman Movie Title Game!</h1>
      {!gameStart && 
        <button onClick={() => setStart(true)}>Start Game</button>
      }
      {gameStart && 
        <Game />
      }
    </div>
  );
}

export default App;
