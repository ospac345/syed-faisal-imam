
import React from 'react'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';



const AboutDesc = () => {

    const theme = useTheme();

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Get to know me!
            </Typography>
            <Typography variant="body1" component="body1" color="text.secondary" gutterBottom style={{ letterSpacing: '0.2em', lineHeight: '1.05' }}>
                I&apos;m a <strong>Frontend Developer</strong> dedicated to crafting engaging websites and web applications. Explore my projects that demonstrate successful product outcomes. <br />
                I also enjoy sharing insights on web development and programming through <strong>LinkedIn</strong>. I&apos;m actively seeking opportunities to contribute and grow. Let&apos;s connect!
            </Typography>

            <Typography variant="h5" gutterBottom marginTop="25px" >
                My skills
            </Typography>
            <Grid container justifyContent="center" alignItems="center" columns={{ xs: 12, sm: 12, md: 12 }} marginBottom='25px'>
                {
                    ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React native', 'Material UI', 'Bootstrap', 'Git', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Java', 'SQL', 'PHP', 'Adobe Photoshop', 'Adobe Illustrator', 'Linux', 'AWS'].map((skill, index) => (
                        <>

                            <Typography variant="body1" component="body1" color="text.secondary" gutterBottom sx={{ letterSpacing: '0.2em', lineHeight: '1.05', border: `1px solid ${theme.palette.secondary.main}`, padding: '4px', margin: '2px', borderRadius: '5px' }}>
                                {skill}
                            </Typography>

                        </>
                    ))

                }
            </Grid>
        </>
    )
}


export default AboutDesc