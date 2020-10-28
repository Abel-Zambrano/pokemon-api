import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [ avatar, setAvatar ] = useState({})

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://pokeapi.co/api/v2/pokemon/haunter')
            setAvatar(request.data)
            return request;
            
        }
        fetchData();
    }, []);

console.log(avatar.species);

    return (
        <div className="card">
            <h1 className="poke-name">{avatar.name}</h1>
        </div>
    )
}
    
export default Pokemon;

    // axios
        //     .get('https://pokeapi.co/api/v2/pokemon/haunter')
        //     .then(res => {
        //         setAvatar(res.data)
                
        //     })
        //     .catch(err => {
        //         console.log(err);
                
        //     })