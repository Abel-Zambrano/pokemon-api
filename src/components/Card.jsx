import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [ pokeData, setPokeData ] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/151')
            .then(res => {
                setPokeData(res.data);
            })
            .catch(err => {
                console.log(err);
                
            })
    }, []);

console.log(pokeData);

    const pokeType = (pokeData && pokeData.types) && <h5>Type: {pokeData.types[0].type.name}</h5>
    const pokeHp = (pokeData && pokeData.stats) && <h5>HP: {pokeData.stats[0].base_stat} </h5>
    const pokeAbility = (pokeData && pokeData.abilities) && <h5>Ability: {pokeData.abilities[0].ability.name} </h5>

    return (
        <div className="card">
            <h1 className="poke-name">{pokeData.species?.name}</h1>
            <img src={pokeData.sprites?.front_default} alt=""/>
            {pokeHp}
            {pokeAbility}
            {pokeType}
        </div>
    )
}
    
export default Card;