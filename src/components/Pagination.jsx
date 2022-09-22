import React from 'react'
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Pagination = ({gotoNextPage, gotoPreviousPage}) => {
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 15
    }}>
      {gotoPreviousPage && <Button startIcon={<NavigateBeforeIcon/>} variant="outlined" color="primary" onClick={gotoPreviousPage}>Previous Page</Button>}
      {gotoNextPage && <Button endIcon={<NavigateNextIcon/>} variant="outlined" color="primary" onClick={gotoNextPage}>Next Page</Button>}
    </div>
  )
}

export default Pagination