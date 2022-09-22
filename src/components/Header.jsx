import React from 'react'
import Grid from '@mui/material/Grid';
import Search from './Search';
import imagen from '../media/pokedex.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  }

  return (
    <Grid margin={0} padding={3} container>
        <Grid item lg={4} md={6} sx={5}>
          <Button 
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} 
            onClick={handleClickLogo}
          >
            <img src={imagen} alt="" width="50" height="50" />
            <Typography variant="h3" color="error">Pokedex</Typography>
          </Button>
        </Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={4} md={6} sx={7} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Search/>
        </Grid>
    </Grid>
  )
}

export default Header