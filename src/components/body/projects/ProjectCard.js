import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Chip, Typography } from '@mui/material';
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../../../styles/projectCardStyles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ projectsData }) => {

    const theme = useTheme();

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            mt={{ xs: 10, sm: 10, md: 10, lg: 10 }}


        >
            {projectsData.map((project, index) => (
                <Grid key={index} container
                    mb={{ xs: 16, sm: 16, md: 16, lg: 16 }}
                    justifyContent="center"
                    rowSpacing={{ xs: 3, sm: 2, md: 3, lg: 3 }}
                    columnSpacing={{ xs: 1, sm: 1, md: 4, lg: 4 }}
                >

                    <Grid item xs={12} md={7}>
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

                    <Grid item xs={12} md={5} >
                        <Typography variant='h4' color='primary' style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                            {project.title}
                        </Typography>
                        <Typography variant='body1' gutterBottom color="text.secondary" style={{ letterSpacing: '0.2em', marginBottom: '5%' }}>
                            {project.short_description}
                        </Typography>

                        <Grid item xs={12} md={12} marginBottom='5%'>
                            {
                                project.technologies.map((technology, index) => (
                                    <Chip key={index} style={{ margin: '1%' }} label={technology} />
                                ))

                            }
                        </Grid>

                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                        >
                            <Button variant="contained" color="secondary" size='large'>
                                Case Study
                            </Button>
                        </Link>
                    </Grid>

                </Grid>


            ))}
        </Grid>
    );
};

export default ProjectCard;
