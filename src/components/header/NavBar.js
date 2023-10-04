import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { ColorModeContext } from '../MainPage';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarDrawerMenu from './NavBarDrawerMenu';


function NavBar() {

    const theme1 = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box sx={{ display: 'flex', paddingBottom: 10 }}>
            <CssBaseline />
            <AppBar component="nav" color='transparent' sx={{ boxShadow: '0 0 0 0' }}>
                <Toolbar>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                            {theme1.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </div>

                    <NavBarDrawerMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;