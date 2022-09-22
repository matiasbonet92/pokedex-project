import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
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
      padding: "5px",
    },
    card:{
        padding: 5,
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
        <Grid className={classes.main} item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar>
                            <img src={imagen} alt="" height="20" width="20" />
                        </Avatar>
                    }
                    title={info.name}
                    subheader={'# '+info.order}
                    align="end"
                />
                <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    height="200"
                    alt={info.name}
                    image={info?.sprites?.front_default}
                />
                <Divider />
                <CardActions align="center">
                    <Chip icon={<CatchingPokemonIcon/>} label="Type" color="primary"/>
                    <div>
                        {info?.types?.filter((item, index) => index < 1).map((item) => {
                            return(
                                <Typography key={item.type.name} variant="subtitle2" color="text.disabled">
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