import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [ avatar, setAvatar ] = useState({})

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/haunter')
            .then(res => {
                setAvatar(res.data)
                
            })
            .catch(err => {
                console.log(err);
                
            })
    }, []);

    return (
        <div className="card">
            <h1 className="poke-name">{avatar.name}</h1>
            {console.log(avatar)}
        </div>
    )
}
    

export default Pokemon;