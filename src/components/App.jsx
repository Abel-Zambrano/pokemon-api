import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import axios from 'axios';

function App() {
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
    <div>
      <Header />
      <Card
        name={pokeData.name}
        img={pokeData.sprites?.front_default} 
        type={pokeType}
        health={pokeHp}
        ability={pokeAbility}
      />
      <Footer />
    </div>
  );
}

export default App;
