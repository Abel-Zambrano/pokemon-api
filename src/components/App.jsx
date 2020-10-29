import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import axios from 'axios';

function App() {
  const [ pokeData, setPokeData ] = useState([]);

  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const randPoke = Math.floor(Math.random(1) * Math.floor(151))

  useEffect(() => {
      axios
          .get(api + 151)
          .then(res => {
              setPokeData(res.data);
          })
          .catch(err => {
              console.log(err);
              
          })
  }, [pokeData]);
  
  const fetchHandler = () => {
    console.log(randPoke);
    
  };

  return (
    <div>
      <Header />
      <Card
        name={pokeData.name}
        img={pokeData.sprites?.front_default} 
        type={pokeData.types?.[0].type.name}
        health={pokeData.stats?.[0].base_stat}
        ability={pokeData.abilities?.[0].ability.name}
        click={fetchHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
