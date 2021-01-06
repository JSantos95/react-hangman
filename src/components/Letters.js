import React, { useEffect, useState } from 'react';
import Man from './Man';

const Letters = ({ title, setGameState }) => {

  const titleBox = title.split('');
  const [guessBox, setGuessBox] = useState([]);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    const regex = /[a-zA-Z]/; //test if a part of the title is a letter
    setGuessBox(title.split('').map(x => {
      if (regex.test(x)) {
        return '-';
      } else {
        return x;
      }
    }))
  }, [title])
  // checks if the game is won or lost when guessBox or stirke updates
  useEffect(() => {
    if (guessBox.join() === titleBox.join() && guessBox.length > 0) {
      setGameState('Winner!');
    }
    // eslint-disable-next-line
  }, [guessBox, titleBox])
  useEffect(() => {
    if (strikes === 6) {
      setGameState('Game Over');
    }
    // eslint-disable-next-line
  }, [strikes])

  /* 
  letter is selected
  if the title has this letter and it hasn't been guessed yet
   add it to guessBox at the correct index(s)
   check if the whole title is guessed
  if not then add a strike to Hangman and check if game over 
  */
  const onChange = (e) => { 
    let letter = e.target.value;
    if (titleBox.includes(letter) && !guessBox.includes(letter)) { 
      let tempBox = [...guessBox];
      for(let i = 0; i < titleBox.length; i++){
        if(titleBox[i] === letter){
          tempBox[i] = letter;
        }
      }
      setGuessBox(tempBox);
    } else {
      setStrikes(prevState => prevState + 1);
    }
  }
  
  return (
    <div className="Letter"> 
      <div className="Letter__guess">
        <h2 className="Letter__header">Guess: {guessBox}</h2>
        <form>
          <label className="Letter__label" htmlFor="letter">Take A Guess: </label>
          <select onChange={onChange}>
            <option>--</option>
            <option name="letter" value="A">A</option>
            <option name="letter" value="B">B</option>
            <option name="letter" value="C">C</option>
            <option name="letter" value="D">D</option>
            <option name="letter" value="E">E</option>
            <option name="letter" value="F">F</option>
            <option name="letter" value="G">G</option>
            <option name="letter" value="H">H</option>
            <option name="letter" value="I">I</option>
            <option name="letter" value="J">J</option>
            <option name="letter" value="K">K</option>
            <option name="letter" value="L">L</option>
            <option name="letter" value="M">M</option>
            <option name="letter" value="N">N</option>
            <option name="letter" value="O">O</option>
            <option name="letter" value="P">P</option>
            <option name="letter" value="Q">Q</option>
            <option name="letter" value="R">R</option>
            <option name="letter" value="S">S</option>
            <option name="letter" value="T">T</option>
            <option name="letter" value="U">U</option>
            <option name="letter" value="V">V</option>
            <option name="letter" value="W">W</option>
            <option name="letter" value="X">X</option>
            <option name="letter" value="Y">Y</option>
            <option name="letter" value="Z">Z</option>
          </select>
        </form>
      </div>
      <Man strikes={strikes} />
    </div>
  )
}

export default Letters
