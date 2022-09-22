import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import imagen from '../media/pokeball.png';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const useStyles = makeStyles((theme) => ({
    main:{
      width: '100%',
      margin: "20px",
      padding: "10px",
    },
    card:{
        padding: 10,
    },
    cardMedia:{
        backgroundColor: "lightgrey",
    },
  }));

const Pokemon = ({url}) => {

    const [info,setInfo] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        getPokemonData(url);
    },[url])

    const getPokemonData = async (url) => {
        const data = await fetch(url);
        const pokemonData = await data.json();
        setInfo(pokemonData);
    }

    return (
        <Grid className={classes.main} item lg={3} md={4} sx={2} spacing={3}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar>
                            <img src={imagen} alt="" height="30" width="30" />
                        </Avatar>
                    }
                    title={info.name}
                    subheader={info.order}
                    align="end"
                />
                <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    height="200"
                    alt={info.name}
                    image={info?.sprites?.front_default}
                />
                <CardContent>
                    <Typography variant="h5" color="primary" align="center">
                        Some Moves:
                        {info?.moves?.filter((move, index) => index < 5).map((move) => {
                            return(
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    {'- '+move.move.name}
                                </Typography>
                            )
                        })}
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions align="center">
                    <Chip icon={<CatchingPokemonIcon/>} label="Type" color="primary"/>
                    <div>
                        {info?.types?.map((item) => {
                            return(
                                <Typography variant="subtitle2" color="text.disabled">
                                    {item.type.name}
                                </Typography>
                            )
                        })}
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Pokemon