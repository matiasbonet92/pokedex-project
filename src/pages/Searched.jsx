import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import SearchedPokemon from '../components/SearchedPokemon'
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
  main:{
    width: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Searched = () => {

  let params = useParams();
  const classes = useStyles();
  const [pokemon,setPokemon] = useState({});
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPokemon();
  },[pokemon])  
  
  const getPokemon = async () => {
    setIsLoading(false);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.search}`);
    const pokemon = await data.json();
    setPokemon(pokemon);
  } 

  if(isLoading) return(<CircularProgress />)

  return (
    <Container>
      <Grid className={classes.main} container>
        <SearchedPokemon key={pokemon.id} pokemon={pokemon}/>
      </Grid>
    </Container>
  )
}

export default Searched