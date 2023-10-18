import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import CssBaseline from '@mui/material/CssBaseline';

import { lightTheme, darkTheme } from './Themes';

function MuiProvider({ children }) {
    const [mounted, setMounted] = useState(false);

    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(darkTheme);



    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        resolvedTheme === "light"
            ? setCurrentTheme(lightTheme)
            : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);



    // Preventing SSR error | Very Important
    if (!mounted) return null;


    return (

        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    );


}

export default MuiProvider;
