import * as React from 'react';
import { Facebook, Instagram, LinkedIn, Home, Info, AlternateEmail,  } from '@mui/icons-material';
import { Grid, Box, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const preventDefault = (event) => event.preventDefault();

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Box
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: '#ff8a65',
          }}
        >
          <Box
            label="Home"
            icon={<Home />}
            value="home"
            component={Link}
            href="/"
          />
          <Box
            label="About Us"
            icon={<Info />}
            value="about"
            component={Link}
            href="/aboutus"
          />
          <Box
            label="Contacto"
            icon={<AlternateEmail />}
            value="contacto"
            component={Link}
            href="/contacto"
          />
        </Box>
      </Grid>

      <Grid container bgcolor="#e64a19" justifyContent="center" bottom={0} left={0}>
        <Box item sx={{ mx: 2 }}>
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
        <Box item sx={{ mx: 2 }}>
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
        <Box item sx={{ mx: 2 }}>
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
