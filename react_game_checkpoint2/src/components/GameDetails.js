import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {

    const { id } = useParams()
    const [jeu, setJeu] = useState({})
    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((resp) => setJeu(resp.data))
            .catch("error")
    }, [])

    return (
        <div>
            <p>{jeu.name}</p>
            <img src={jeu.background_image} height="150px" alt="" />
            {jeu.clip !== undefined && <video controls><source src={jeu.clip.clip} /></video>}
        </div>
    );
};

export default GameDetails;