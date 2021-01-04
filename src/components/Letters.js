import React, { useState } from 'react';
import Man from './Man';

const Letters = (props) => {

  const regex = /[a-zA-Z]/; //will be use to test if a part of the title is a letter
  const titleBox = props.title.split(''); //title split by every index

  const [guessBox, setGuessBox] = useState(props.title.split('').map(x => {
    if (regex.test(x)) {
      return '-';
    } else {
      return x;
    }
  }));
  const [strikes, setStrikes] = useState(0);

  /* 
  letter is selected
  if the title has this letter and it hasn't been guessed yet
   add it to guessBox at the correct index(s)
  if not then add a strike to Hangman 
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
    <div>
      <h2>Guess: {guessBox}</h2>
      <form>
        <label htmlFor="letter">Take A Guess: </label>
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
      <Man strikes={strikes} />
    </div>
  )
}

export default Letters
