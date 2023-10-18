
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
                    <Typography variant="body1" component="body1" color="text.secondary" gutterBottom style={{ letterSpacing: '0.2em', lineHeight: '1.05' }}>
                        I&apos;m a <strong>Frontend Developer</strong> dedicated to crafting engaging websites and web applications. Explore my projects that demonstrate successful product outcomes. <br /><br />
                        I also enjoy sharing insights on web development and programming through <strong>LinkedIn</strong>. I&apos;m actively seeking opportunities to contribute and grow. Let&apos;s connect!
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