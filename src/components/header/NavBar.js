import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import NavBarDrawerMenu from './NavBarDrawerMenu';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';


function NavBar() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();


    return (
        <Box sx={{ display: 'flex', paddingBottom: 10 }}>
            <CssBaseline />
            <AppBar component="nav" color='transparent' sx={{ boxShadow: '0 0 0 0' }}>
                <Toolbar>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                            color='primary'>
                            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </div>
                    <NavBarDrawerMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;