import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FooterComponent from '../footer/FooterComponent';
import HeroSection from './HeroSection';
import About from './about/About';


const Body = () => {

    return (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            <HeroSection />
            <About />
        </Box>
    )



}

export default Body;