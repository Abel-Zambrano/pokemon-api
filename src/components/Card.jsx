import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [ pokeData, setPokeData ] = useState({
        name: '',
        pic: '',
        type: '',
        hp: 0,
        attack: 0

    })

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/haunter')
            .then(res => {
                console.log(res.data);
                setPokeData({
                    name: res.data.name,
                    pic: res.data.sprites.other.dream_world.front_default,
                    type: 'Loading',
                    hp: '',
                    attack: 0
                })
            })
            
            
    }, [setPokeData]);

console.log(pokeData);
 
    
    return (
        <div className="card">
            <h1 className="poke-name">{pokeData.name}</h1>
            <img src={pokeData.pic} alt="pokemon"/>
            <p>Type: {pokeData.type}</p>
        </div>
    )
}
    
export default Card;