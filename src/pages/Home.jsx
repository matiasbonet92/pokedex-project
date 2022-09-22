import React from 'react'
import Pokemons from '../components/Pokemons';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main:{
    width: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid className={classes.main} container>
        <Pokemons/>
      </Grid>
    </Container>
  )
}

export default Home