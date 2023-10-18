import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Chip, Typography } from '@mui/material';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../styles/projectCardStyles.css'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectDetailedPage = ({ project }) => {

    return (

        <>



            <Grid container
                alignItems="center"
                marginBottom="10%"
                justifyContent="center"
            >

                <Grid item xs={11} md={8}
                    marginBottom='4%'
                >
                    <Link href='/#projects'>
                        <Button aria-label="back">
                            <ArrowBackIcon /> projects
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={11} md={8}
                    marginBottom='5%'
                >
                    <Paper className="project-card-img-div"
                        elevation={3}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <LazyLoadImage
                            className="project-card-img"
                            src={project.image}
                            alt={project.title}
                        />
                    </Paper >
                </Grid>

                <Grid item xs={11} md={8} >
                    <Paper elevation={3} style={{ padding: '5%' }}>
                        <Typography variant='h4' color='primary' style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                            {project.title}
                        </Typography>
                        {project.long_description.map((paragraph, index) => (

                            <Typography key={index} variant='body1' gutterBottom color="text.secondary" style={{ letterSpacing: '0.2em', marginBottom: '5%' }}>
                                {paragraph}
                            </Typography>
                        ))

                        }


                        {project.challenges && project.challenges.length > 0 &&
                            <>
                                <Typography variant='h6' color='primary' style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                                    Challenges
                                </Typography>

                                {
                                    project.challenges.map((challenge, index) => (
                                        <Typography key={index} variant='body1' gutterBottom color="text.secondary" style={{ letterSpacing: '0.2em', marginBottom: '5%' }}>
                                            {challenge}
                                        </Typography>
                                    ))}
                            </>
                        }

                        <Grid item xs={12} md={12} marginBottom='5%'>
                            <Typography variant='h6' color='primary' style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                                Technologies
                            </Typography>
                            {
                                project.technologies.map((technology, index) => (
                                    <Chip key={index} style={{ margin: '1%' }} label={technology} />
                                ))

                            }
                        </Grid>

                        <Grid item xs={12} md={12} marginBottom='5%'>
                            <Typography variant='h6' color='primary' style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                                External Links
                            </Typography>
                            {
                                project.github && project.github.length > 0 &&
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outlined" color="primary" size='large' style={{ margin: '1%' }}>
                                        Github
                                    </Button>
                                </Link>
                            }
                            {
                                project.live &&
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant='outlined' color="primary" size='large' style={{ margin: '1%' }}>
                                        Live
                                    </Button>
                                </Link>
                            }
                        </Grid>

                        <Link
                            href={`/#projects`}
                        >
                            <Button variant="contained" color="secondary" size='large' sx={{ width: '100%' }}>
                                Go Back
                            </Button>
                        </Link>

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}


export default ProjectDetailedPage