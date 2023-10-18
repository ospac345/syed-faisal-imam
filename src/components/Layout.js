'use client'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect, useMemo, createContext } from 'react';
import AnimatedBackground from './AnimatedBackground';
import NavBar from './header/NavBar';
import FooterComponent from './footer/FooterComponent';
import { NextThemesProvider } from './providers/NextThemesProvider';
import MuiProvider from './providers/MuiProvider';



function Layout({ children }) {

    return (
        <>

            <NextThemesProvider>
                <MuiProvider>
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
                        <Container className="main-page-container" maxWidth="xl" disableGutters={true}>
                            <NavBar />
                            {children}
                            <AnimatedBackground />
                        </Container>
                    </Box>
                    <FooterComponent />
                </MuiProvider>
            </NextThemesProvider>


        </>
    );
}

export default Layout;