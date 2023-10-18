'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TypeAnimation } from 'react-type-animation';
import '../../styles/heroSectionStyles.css';
import { styled } from '@mui/system';
import heroImg from '../images/syed-hero-image-2.webp'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import ScrollButton from './ScrollButton';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';


const AnimationContainer = styled('div')({
    fontSize: '2em',
    display: 'inline-block',
});


const HeroSection = () => {
    const theme = useTheme();


    return (

        <Box style={{ height: `90vh`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid
                className='hero-section-grid-container'
                container
                justifyContent="space-between"
                alignItems="center"
                margin='0 0 0 0'
                spacing={3}
                columns={{ xs: 12, sm: 12, md: 12 }} // 12 columns on mobile, 12 columns on desktop
            >
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="hero-img-box"
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >

                            <Image
                                className="hero-img"
                                style={{ minWidth: '50%', maxWidth: '50%', height: 'auto', boxShadow: `-50px -50px 0 -40px ${theme.palette.secondary.main}, 50px 50px 0 -40px ${theme.palette.secondary.main}` }}
                                src={heroImg}
                                alt="Syed Faisal Imam"
                                priority
                            />
                        </div>

                    </Grid>
                </Slide>
                <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                    <Grid item xs={12} sm={6} md={6}> {/* 6 columns on mobile, 6 columns on desktop */}
                        <Typography
                            variant="h6"
                            component="h6"
                            gutterBottom
                            style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }}
                        >
                            hi 👋🏼 i am
                        </Typography>

                        <Typography
                            variant="h3"
                            component="h3"
                            style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }}
                        > syed faisal imam
                        </Typography>
                        <AnimationContainer style={{ color: theme.palette.secondary.main, fontWeight: '700', fontSize: '1.5rem', letterSpacing: '0.2em' }}>
                            <TypeAnimation
                                sequence={[
                                    'developer',
                                    1000,
                                    'designer',
                                    2000,
                                    'creator',
                                    2000,
                                    'learner',
                                    2000,
                                    'thinker',
                                    2000,
                                    'doer',
                                    2000,
                                    'maker',
                                    2000,
                                    'problem solver',
                                    2000,
                                    'innovator',
                                    2000,
                                    'leader',
                                    2000,
                                    'team player',
                                    2000,
                                    'collaborator',
                                    2000,
                                    'traveler',

                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </AnimationContainer>
                    </Grid>
                </Slide>
            </Grid>
            <ScrollButton target="about" />
        </Box >
    );
};

export default HeroSection;