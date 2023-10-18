import { createTheme } from '@mui/material/styles';


const lightTheme =
    createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#364652',  // Blue Gray
            },
            secondary: {
                main: '#716873',
            },
            error: {
                main: '#FF1744',  // Red
            },
            background: {
                default: '#ECEFF1',  // White
                paper: '#FAFDFF',    // Light Gray
                paper2: '#ECEFF1',   // White
            },
            particles: {
                main: '#009688',  // Teal / Cyan
            },
            divider: '#A2A4A6',
            footer: {
                background: '#D4D7D9',  // Light Gray
                text: '#555555',        // Dark Gray Text
            }
        },
    });

const darkTheme =
    createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#89AB92',  // Blue Gray (Dark Mode)
            },
            secondary: {
                main: '#B19F9F',
            },
            error: {
                main: '#FF1744',  // Red
            },
            background: {
                default: '#333333',  // Dark Gray
                paper: '#5E5E5E',    // Dark Gray
                paper2: '#333333',   // Dark Gray
            },
            particles: {
                main: '#00BCD4',  // Teal / Cyan (Dark Mode)
            },
            divider: '#A2A4A6',
            footer: {
                background: '#5E5E5E',   // Dark Gray
                text: '#cccccc',          // Light Gray Text
            }
        },
    });


export { lightTheme, darkTheme };