import React from 'react';

const Letters = () => {
  
  return (
    <div>
      <form>
        <label for="letter">Letter Guess:</label>
        <input type="text" id="letter" name="letter"></input>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Letters
