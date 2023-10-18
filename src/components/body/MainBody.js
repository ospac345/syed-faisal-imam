import React from 'react';
import Box from '@mui/material/Box';
import HeroSection from './hero_section/HeroSection';
import About from './about/About';
import Projects from './projects/Projects'
import Layout from '../Layout';


const MainBody = () => {

    return (
        <Layout>

            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <HeroSection />
                <About />
                <Projects />
            </Box>

        </Layout>
    );

}

export default MainBody;