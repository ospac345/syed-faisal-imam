'use client'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect, useMemo, createContext } from 'react';
import AnimatedBackground from './AnimatedBackground';
import NavBar from './header/NavBar';
import Body from './body/Body';
import FooterComponent from './footer/FooterComponent';


export const ColorModeContext = createContext();

function MainPage() {
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

    console.log(localStorage.getItem('theme'));

    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === 'light' ? '#607D8B' : '#37474F',  // Blue Grey
                    },
                    secondary: {
                        main: mode === 'light' ? '#FF5722' : '#F4511E',  // Deep Orange
                    },
                    error: {
                        main: mode === 'light' ? '#FF1744' : '#FF1744',  // Red
                    },
                    background: {
                        default: mode === 'light' ? '#E5E8EB' : '#333333',  // Gainsboro / Dark Gray
                        paper: mode === 'light' ? '#ECEFF1' : '#333333',    // Gainsboro / Dark Gray
                    },
                    particles: {
                        main: mode === 'light' ? '#009688' : '#00BCD4',  // Teal / Cyan
                    },
                    divider: '#B09F95',
                    footer: {
                        background: mode === 'light' ? '#f0f0f0' : '#333333', // Light gray in light mode, Dark gray in dark mode
                        text: mode === 'light' ? '#555555' : '#cccccc', // Dark gray text in light mode, Light gray text in dark mode
                    }
                },

            }),
        [mode],
    );

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Box
                        className="main-page-root-box"
                        sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'background.default',
                            color: 'text.primary',
                        }}
                    >
                        <Container className="main-page-container" maxWidth="xl">
                            <NavBar />
                            <Body />
                            <AnimatedBackground />
                        </Container>
                    </Box>
                    <FooterComponent />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
}

export default MainPage;