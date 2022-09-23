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
import Alert from '@mui/material/Alert';

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

const SearchedPokemon = ({pokemon}) => {
  
    const classes = useStyles();    

    if(Object.keys(pokemon).length === 0){
        return(
            <Alert severity="error">The Pokemon doesn't exists! Please search again.</Alert>
        )
    }else{
        return(
            <Grid className={classes.main} item lg={2} md={3} sm={4} xs={6}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar>
                                <img src={imagen} alt="" height="30" width="30" />
                            </Avatar>
                        }
                        title={pokemon?.name}
                        subheader={pokemon?.order}
                        align="end"
                    />
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        height="200"
                        alt={pokemon?.name}
                        image={pokemon?.sprites?.front_default}
                    />
                    <Divider />
                    <CardActions align="center">
                        <Chip icon={<CatchingPokemonIcon/>} label="Type" color="primary"/>
                        <div>
                            {pokemon?.types?.map((item) => {
                                return(
                                    <Typography key={pokemon?.id} variant="subtitle2" color="text.disabled">
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
}

export default SearchedPokemon