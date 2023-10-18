import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import NavBarDrawerMenu from './NavBarDrawerMenu';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import * as React from 'react';



function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


function NavBar(props) {
    const { theme, resolvedTheme, setTheme } = useTheme();


    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <Box sx={{ display: 'flex', paddingBottom: 10 }}>
                    <CssBaseline />
                    <AppBar component="nav" color='transparent' sx={{ boxShadow: '0 0 0 0' }}>
                        <Toolbar>
                            <div style={{ marginLeft: 'auto' }}>
                                <IconButton size='large' onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                                    color='primary'>
                                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                            </div>
                            <NavBarDrawerMenu />
                        </Toolbar>
                    </AppBar>
                </Box>
            </HideOnScroll>
        </React.Fragment>
    );
}

export default NavBar;