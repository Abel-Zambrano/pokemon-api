import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import axios from 'axios';

function App() {
  const [ pokeData, setPokeData ] = useState([]);
  const [ pokeId, setPokeId ] = useState(151);

  const api = 'https://pokeapi.co/api/v2/pokemon/'
  

  useEffect(() => {
      axios
          .get(api + pokeId)
          .then(res => {
              setPokeData(res.data);
          })
          .catch(err => {
              console.log(err);
              
          })
  }, [pokeId]);

  const randPoke = ((min , max) => {
    return Math.floor(Math.random() * (max - min) + min);
  })
  
  
  const fetchHandler = () => {
    setPokeId(randPoke(1, 152));
    
  };

  console.log(pokeId);
  

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
