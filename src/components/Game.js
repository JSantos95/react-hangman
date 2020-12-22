import React, { useEffect, useState } from 'react';
import Title from './Title';
import Letters from './Letters';
import Man from './Man';
import getTitles from '../api/getTitles';

const Game = () => {

    const [movieTitles, setMovieTitles] = useState([]);

    useEffect(() => {
        getTitles().then((results) => {
        setMovieTitles(results);
        })
    }, [])

    return(
        <div>
            <Title />
            <Letters />
            <Man />
        </div>
    )
}

export default Game