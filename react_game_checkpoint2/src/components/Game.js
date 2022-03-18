import React from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    return (
        <div>
            <h1>{props.jeu.name}</h1>
            <img src={props.jeu.background_image} height="150px" alt={props.jeu.name} />
            <p>{props.jeu.released}</p>
            <NavLink to={`/games/${props.jeu.id}`}><button>clique ici</button></NavLink>
        </div>
    );
};

export default Game;