import React, { useEffect, useState } from 'react';
import Title from './Title';
import Letters from './Letters';
import getTitles from '../api/getTitles';

const Game = () => {

    const [movieTitle, setMovieTitle] = useState('');

    useEffect(() => { 
        getTitles().then(({ results }) => {
            let size = results.length;
            let rand = Math.floor(Math.random() * size);
            setMovieTitle(results[rand].title.toUpperCase());
        })
    }, []) 

    return (
        <div>
            <Title title={movieTitle} />
            <Letters title={movieTitle} />
        </div>
    )
}

export default Game;