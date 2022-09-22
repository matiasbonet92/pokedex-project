import React, {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { filledInputClasses } from '@mui/material';
import Pagination from '../components/Pagination'

const useStyles = makeStyles((theme) => ({
  main:{
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Home = () => {

  const classes = useStyles();
  const [pokemons,setPokemons] = useState([]);
  const [currentPage,setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previousPage,setPreviousPage] = useState("");
  const [nextPage,setNextPage] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPokemons();
  },[currentPage])  
  
  const getPokemons = async () => {
    setIsLoading(false);
    const data = await fetch(currentPage);
    const pokemons = await data.json();
    setNextPage(pokemons.next);
    setPreviousPage(pokemons.previous);
    setPokemons(pokemons.results);
  } 

  function gotoNextPage(){
    setCurrentPage(nextPage);
  }

  function gotoPreviousPage(){
    setCurrentPage(previousPage);
  }

  if(isLoading) return(<CircularProgress />)

  return (
    <Container>
      <Divider/>
      <Pagination 
        gotoNextPage={nextPage ? gotoNextPage : null} 
        gotoPreviousPage={previousPage ? gotoPreviousPage : null}
      /> 
      <Divider/>
      <Grid className={classes.main} container>
        {pokemons?.map((pokemon)=>{
          return(<Pokemon key={pokemon.name} url={pokemon.url}/>)
        })}
      </Grid>
      <Divider/>
      <Pagination 
        gotoNextPage={nextPage ? gotoNextPage : null} 
        gotoPreviousPage={previousPage ? gotoPreviousPage : null}
      /> 
    </Container>
  )
}

export default Home