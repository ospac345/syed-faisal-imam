
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

const About = () => {

    return (
        <Grid container justifyContent="center" alignItems="center" id='about'>
            <Grid item xs={12} sm={12} md={12}>
                <Paper elevation={2} style={{ padding: '2em', textAlign: 'start' }}>
                    <Typography variant="h4" component="h4" gutterBottom style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }}>
                        about.
                    </Typography>
                    <Typography variant="body1" component="body1" gutterBottom style={{ fontWeight: '400', letterSpacing: '0.2em', lineHeight: '1.05' }}>
                        I am a full stack developer with a passion for creating beautiful, responsive, and accessible websites and web applications.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default About