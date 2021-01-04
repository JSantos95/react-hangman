import React, { useEffect, useState } from 'react';
import Man from './Man';

const Letters = (props) => {

  const [guess, setGuess] = useState([]); 
  const [titleBox, setTitleBox] = useState(props.title.split('').filter(x => x === " "));

  useEffect(() => {

  }, [guess])


  
  return (
    <div>
      <form>
        <label htmlFor="letter">Take A Guess:</label>
        <select>
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
      <Man />
    </div>
  )
}

export default Letters
