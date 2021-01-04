import React, { useEffect, useState } from 'react';

const Man = (props) => {

  const [phase, setPhase] = useState('Zero');

  //phase will be rendered whenever props.strike changes 
  useEffect(() => {
    switch (props.strikes) {
      case 1: 
        setPhase('One');
        break;
      case 2: 
        setPhase('Two');
        break;
      case 3:
        setPhase('Three');
        break;
      case 4: 
        setPhase('Four');
        break;
      case 5:
        setPhase('Five');
        break;
      case 6: 
        setPhase('Six-Game-Over');
        break;
      default: 
        setPhase('Zero');
    }
  }, [props.strikes])

  return (
      <div>
        <p>Guesses Left: {props.strikes} / 6 </p> 
        <img src={`/img/${phase}.png`} alt="Hangman" width='500' height='500' />
      </div>
  )
}

export default Man;