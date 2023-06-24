import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Home, Info, AlternateEmail, } from '@mui/icons-material';
import { Box, BottomNavigation, BottomNavigationAction, Link, } from '@mui/material';

const preventDefault = (event) => event.preventDefault();


export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 78,
                left:  0,
                width: '100%',
                height: 150,
                backgroundColor: '#ff8a65',
            }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%', 
                }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    sx={{
                        backgroundColor: '#ff8a65',
                       
                    }}
            >
                <BottomNavigationAction 
                    label="Home" 
                    icon={<Home />} 
                    value='home'
                    component={Link}
                    href="http://localhost:3000/"
                />
                <BottomNavigationAction 
                    label="About Us" 
                    icon={<Info />} 
                    value='about'
                    component={Link}
                    href="http://localhost:3000/aboutus"
                />
                <BottomNavigationAction 
                    label="Contacto" 
                    icon={<AlternateEmail />} 
                    value='contacto'
                    component={Link}
                    href="mailto:allmarket@gmail.com"
                />
            </BottomNavigation>
            </Box>

            <Box
                sx={{
                    bgcolor: '#ff6e40',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    display: "flex",
                }}
            >
                <NavLink to='https://www.linkedin.com' target='_blank'>
                    <LinkedIn
                        sx={{
                            p: 2,
                            mb: 1,
                            color: '#eeeeee',
                            fontSize: '35px',
                        }}
                    />
                </NavLink>
                <NavLink to='https://www.instagram.com' target='_blank'>
                    <Instagram
                        sx={{
                            p: 2,
                            mb: 1,
                            color: '#eeeeee',
                            fontSize: '35px'
                        }}
                    />
                </NavLink>
                <NavLink to='https://www.facebook.com' target='_blank'>
                    <Facebook
                        sx={{
                            p: 2,
                            mb: 1,
                            color: '#eeeeee',
                            fontSize: '35px'
                        }}
                    />
                </NavLink>
            </Box>
        </Box>
    );
}