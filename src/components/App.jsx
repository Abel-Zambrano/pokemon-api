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
  
  const fetchHandler = () => {

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
