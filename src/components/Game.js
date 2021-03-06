import React, { useEffect, useState } from 'react';
import Title from './Title';
import Letters from './Letters';
import getTitles from '../api/getTitles';

const Game = (props) => {

    const [movieTitle, setMovieTitle] = useState('');
    const [gameState, setGameState] = useState('Play'); // won or game over ??

    useEffect(() => { 
        getTitles().then(({ results }) => {
            let size = results.length;
            let rand = Math.floor(Math.random() * size);
            setMovieTitle(results[rand].title);
        })
    }, []) 

    return (
        <div>
            {gameState === 'Play' ? 
                <Letters title={movieTitle} gameState={gameState} setGameState={setGameState} /> : 
                <Title title={movieTitle} status={gameState} setStart={props.setStart} /> 
            }
        </div>
    )
}

export default Game;