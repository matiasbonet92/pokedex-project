import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Pokemon from './Pokemon'

const Pokemons = () => {

  const [pokemons,setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  },[])  
  
  const getPokemons = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
    const pokemons = await data.json();
    setPokemons(pokemons.results);
  } 

  return (
    <>
        {pokemons.map( (pokemon)=>{
            return(
                <Pokemon key={pokemon.name} url={pokemon.url}/>
            )
        })}
    </>
  )
}

export default Pokemons