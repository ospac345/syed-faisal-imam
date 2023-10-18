import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ProjectCard from './ProjectCard';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const Projects = () => {
    const theme = useTheme();
    const [projectsData, setProjectsData] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('/api/all_project_data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProjectsData(data))
            .catch(error => setError(error.message));

    }, []);

    return (

        <>

            <Paper id='projects' elevation={0} sx={{ padding: '2em', textAlign: 'start', backgroundColor: theme.palette.background.paper2 }}
            >
                <Typography color={theme.palette.primary.main}
                    variant="h3" component="h3" gutterBottom
                    style={{ fontWeight: '700', letterSpacing: '0.2em' }}
                    pt={{ xs: 10, sm: 10, md: 10, lg: 10 }}
                >
                    projects.
                </Typography>
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <>
                        <Divider />

                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={7} lg={7}
                                mt={{ xs: 10, sm: 10, md: 10, lg: 10 }}
                            >
                                <Typography variant="body1" component="body1" color="text.secondary" gutterBottom style={{ letterSpacing: '0.2em', lineHeight: '1.05' }}>
                                    I have had the privilege of working on a diverse range of projects, spanning from <strong>full-stack web development</strong> to <strong>machine learning</strong>, <strong>DevOps</strong>, <strong>Cloud Platform Development</strong>, and <strong>database design</strong>. Always on the lookout for exciting new projects, I am eager to explore innovative ideas. Feel free to reach out if you have any concepts in mind!
                                </Typography>

                            </Grid>

                        </Grid>

                        <ProjectCard projectsData={projectsData} />

                    </>

                )}
            </Paper>

        </>
    )
}


export default Projects;