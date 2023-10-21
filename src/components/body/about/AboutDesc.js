
import React from 'react'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import AboutSkillsIllustration from './AboutSkillsIllustration';
import Chip from '@mui/material/Chip';



const AboutDesc = () => {

    const theme = useTheme();

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={7} lg={7} >
                    <Typography color='text.secondary' variant="h6" gutterBottom sx={{ letterSpacing: '0.2em' }} >
                        I am a Full Stack Software Engineer based in vibrant Glasgow.
                    </Typography>
                    <Typography variant="body1" color="text.primary" gutterBottom style={{ letterSpacing: '0.2em' }}>
                        Since starting my journey in 2018, I&apos;ve been immersed in the tech industry, passionate about creating software that enhances lives.
                        <br />
                        When I&apos;m not coding, I&apos;m exploring new places, experimenting in the kitchen, or lost in the world of music.
                    </Typography>



                </Grid>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: "5%" }}>
                <Typography color='secondary' variant="h4" gutterBottom marginTop="25px" sx={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} >
                    Skills
                </Typography>
                <AboutSkillsIllustration />

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={7} lg={7} marginBottom='25px'>
                    {
                        ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React native', 'Material UI', 'Bootstrap', 'Git', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Java', 'SQL', 'PHP', 'Adobe Photoshop', 'Adobe Illustrator', 'Linux', 'AWS'].map((skill, index) => (

                            <Chip key={index} style={{ margin: '1%' }} label={skill} />

                        ))

                    }
                </Grid>
            </div>
        </>
    )
}


export default AboutDesc