import React from 'react';
import { Box, } from '@mui/material';
import Filtros from '../Filtros/Filtros';


export default function Home() {

  return (
    <Box container direction="column" style={{ minHeight: '100vh', }}>
      <Box item xs={12} md={8}>
        <CardContainer />
      </Box>
      <Box item xs={12} md={4}>
        <Filtros />
      </Box>
    </Box>
  );

}