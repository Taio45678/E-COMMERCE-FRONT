import * as React from 'react';
import { Facebook, Instagram, LinkedIn, Home, Info, AlternateEmail } from '@mui/icons-material';
import { Grid, Box, BottomNavigation, BottomNavigationAction, Link, useMediaQuery } from '@mui/material';
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
        {isSmDown ? (
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
              item
              sx={{ mx: 2 }}
            />
            <BottomNavigationAction
              label="About Us"
              icon={<Info />}
              value="about"
              component={Link}
              href="/aboutus"
              item
              sx={{ mx: 2 }}
            />
            <BottomNavigationAction
              label="Contacto"
              icon={<AlternateEmail />}
              value="contacto"
              component={Link}
              href="/contacto"
              item
              sx={{ mx: 2 }}
            />
          </BottomNavigation>
        ) : (
          <>
            <Grid item sx={{ mx: 2 }}>
              <Link href="/" color="inherit" underline="none">
                <Home
                  sx={{
                    p: 2,
                    mb: 1,
                    color: '#eeeeee',
                    fontSize: '40px',
                  }}
                />
              </Link>
            </Grid>
            <Grid item sx={{ mx: 2 }}>
              <Link href="/aboutus" color="inherit" underline="none">
                <Info
                  sx={{
                    p: 2,
                    mb: 1,
                    color: '#eeeeee',
                    fontSize: '40px',
                  }}
                />
              </Link>
            </Grid>
            <Grid item sx={{ mx: 2 }}>
              <Link href="/contacto" color="inherit" underline="none">
                <AlternateEmail
                  sx={{
                    p: 2,
                    mb: 1,
                    color: '#eeeeee',
                    fontSize: '40px',
                  }}
                />
              </Link>
            </Grid>
          </>
        )}
      </Grid>

      <Grid container bgcolor="#e64a19" justifyContent="center" bottom={0} left={0}>
        <Grid item sx={{ mx: 2 }}>
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
        </Grid>
        <Grid item sx={{ mx: 2 }}>
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
        </Grid>
        <Grid item sx={{ mx: 2 }}>
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
        </Grid>
      </Grid>
    </Box>
  );
}
