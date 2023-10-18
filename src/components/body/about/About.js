
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import AboutTimeline from './AboutTimeline';
import AboutDesc from './AboutDesc';
import AboutJourneyIllustration from './AboutJourneyIllustration';
import Divider from '@mui/material/Divider';


const About = () => {

    const theme = useTheme();

    return (

        <Paper id='about' elevation={0} style={{ padding: '2em' }}>

            <Typography color={theme.palette.primary.main}
                variant="h3" component="h3" gutterBottom
                style={{ fontWeight: '700', letterSpacing: '0.2em' }}
                pt={{ xs: 10, sm: 10, md: 5, lg: 5 }}
            >
                about.
            </Typography>
            <Divider />

            <Grid columns={{ xs: 12, sm: 12, md: 12 }} container justifyContent="center" alignItems="center">

                <Grid item xs={12} sm={12} md={12}
                    mt={{ xs: 10, sm: 10, md: 10, lg: 10 }}
                >
                    <AboutDesc />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Typography color='secondary' variant="h4" gutterBottom marginTop="25px" sx={{ fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05' }} >
                            Journey
                        </Typography>
                        <AboutJourneyIllustration />

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10%' }}>
                        <AboutTimeline />
                    </div>
                </Grid>
            </Grid>
        </Paper>

    )
}


export default About