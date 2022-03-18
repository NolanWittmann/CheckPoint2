import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Game from './Game';

const GameList = () => {

    const [game, setGame] = useState([])
    const [on, setOn] = useState(false)
    useEffect(() => {
        axios.get("https://apis.wilders.dev/wild-games/games/")
            .then((resp) => setGame(resp.data))
            .catch("error")
    }, [])

    const filter = () => {
        setOn(!on)
    }

    return (
        <div>
            <button onClick={filter}>{!on ? "Affiche les notes supérieur à 4.5" : "Affiche tous les jeux"}</button>
            {game.filter(note => note.rating >= 4.5 || !on)
                .map((jeu, index) => {
                    return <Game jeu={jeu} key={index} />
                })}


        </div>
    );
};

export default GameList;