import React from 'react';

const Game = (props) => {
    return (
        <div>
            <h1>{props.jeu.name}</h1>
            <img src={props.jeu.background_image} height="150px" alt={props.jeu.name} />
            <p>{props.jeu.released}</p>
        </div>
    );
};

export default Game;