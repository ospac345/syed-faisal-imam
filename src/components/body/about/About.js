
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import AboutTimeline from './AboutTimeLine';
import AboutDesc from './AboutDesc';


const About = () => {

    const theme = useTheme();

    return (

        <Paper elevation={0} style={{ padding: '2em', textAlign: 'start' }}>
            <Typography color={theme.palette.primary.main} variant="h3" component="h3" gutterBottom style={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }}>
                about.
            </Typography>

            <Grid container justifyContent="center" alignItems="center" id='about' columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12} sm={6} md={6}>

                    <AboutDesc />

                </Grid>

                <Grid item xs={12} sm={6} md={6}>

                    <AboutTimeline />

                </Grid>
            </Grid>
        </Paper>

    )
}


export default About