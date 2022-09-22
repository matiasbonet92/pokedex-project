import React from 'react'
import {useParams} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import SearchedPokemon from '../components/SearchedPokemon'

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

  return (
    <Container>
      <Grid className={classes.main} container>
        <SearchedPokemon name={params.search}/>
      </Grid>
    </Container>
  )
}

export default Searched