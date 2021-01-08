import React, { useState } from 'react';

const BigGuess = ({title, setGuessBox, setStrikes}) => {

    const [guessTitle, setGuessTitle] = useState('');

    const onChange = (e) => {
        setGuessTitle(e.target.value);
    }
    
    //onSubmit we check if there guess was correct 
    const onSubmit = (e) => {
        e.preventDefault();
        if (guessTitle === title) {
            setGuessBox(title.toUpperCase().split(''));
        } else { 
            setStrikes(6);
        }
    }

    return (
        <form className="bigGuess" onSubmit={onSubmit}>
            <label className="bigGuess__label" htmlFor="bigGuess">Guess The Whole Title: </label>
            <input className="bigGuess__input" type="text" name="bigGuess" value={guessTitle} onChange={onChange} placeholder="Don't Forget Puncuation!"></input>
            <input className="bigGuess__submit" type="submit" value="Guess"></input>
        </form>
    )
}

export default BigGuess;