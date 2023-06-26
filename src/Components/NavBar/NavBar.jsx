import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Box } from '@mui/material';

export default function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(248, 227, 227)',
        height: '80px',
        padding: '0 100px', 
      }}
    >
      <Box sx={{ ml: 5, mt: 3, }}>
        <Link to='/home'>
          <label>HOME</label>
        </Link>
      </Box>
      <SearchBar />
      <Box sx={{ mr: 5, mt: 2,}}>
        <Link to='/formProducto'>
          <label>Crear Producto</label>
        </Link>
      </Box>
    </Box>
  );
}

