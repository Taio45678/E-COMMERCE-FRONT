import * as React from 'react';
import { Facebook, Instagram, LinkedIn, Home, Info, AlternateEmail } from '@mui/icons-material';
import { Grid, Box, BottomNavigation, BottomNavigationAction, Link, } from '@mui/material';

const preventDefault = (event) => event.preventDefault();

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        bottom: 78,
        left: 0,
        width: '100%',
        height: 150,
        backgroundColor: '#ff7043',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: '#ff7043',
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            value="home"
            component={Link}
            href="/"
          />
          <BottomNavigationAction
            label="About Us"
            icon={<Info />}
            value="about"
            component={Link}
            href="/aboutus"
          />
          <BottomNavigationAction
            label="Contacto"
            icon={<AlternateEmail />}
            value="contacto"
            component={Link}
            href="/contacto"
          />
        </BottomNavigation>
      </Grid>

      <Grid
        container
        bgcolor="#e64a19"
        justifyContent="center"
        bottom={0}
        left={0}
      >
        <Box item>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
        <Box item>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
        <Box item>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
      </Grid>
    </Box>
  );
}
