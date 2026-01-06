import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../../styles/footerStyles.css'
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FooterIllustration from './FooterIllustration';
import Button from '@mui/material/Button';
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';


const FooterComponent = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            color: theme.palette.footer.text,
        }}>
            <Grid
                container className="footer_container" style={{ backgroundColor: theme.palette.footer.background }}>

                <Grid item className="social_media" xs={12} md={4} p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FooterIllustration />
                </Grid>

                <Grid item xs={12} md={4} p={2}>
                    <Typography variant='h4' color='primary' sx={{ textAlign: 'center', fontWeight: '700', letterSpacing: '0.2em', lineHeight: '1.05', marginBottom: '30px' }} gutterBottom>
                        contact.
                    </Typography>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <Link href="mailto:i.syed.faisal@hotmail.com" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="email" size='large' color='secondary'><AlternateEmailIcon /></IconButton>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/syed-faisal-imam-gcu/" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="linkedin" size='large' color='secondary'><LinkedInIcon /></IconButton>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.facebook.com/ospac345" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="facebook" size='large' color='secondary'><FacebookIcon /></IconButton>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://github.com/ospac345" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="github" size='large' color='secondary'><GitHubIcon /></IconButton>
                            </Link>
                        </div>

                        <div>
                            <Link href="https://wa.me/447480976762" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="whatsapp" size='large' color='secondary'><WhatsAppIcon /></IconButton>
                            </Link>
                        </div>

                    </Grid>

                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link href="https://drive.google.com/file/d/1IyNerW-V_VFMVzpznbFQ94YpZRDWwybZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button aria-label="resume" size='small' variant='outlined' color='primary' startIcon={<TextSnippetSharpIcon />}>
                                Resume
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                        <Typography variant='body2' sx={{ textAlign: 'center', letterSpacing: '0.2em', lineHeight: '1.05' }} gutterBottom>
                            <LocationOnIcon />
                            Glasgow, Scotland, UK
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid
                id="contact"
            >
                <Typography variant="body2" sx={{ textAlign: 'center' }} gutterBottom>
                    © {currentYear} | Syed Faisal Imam
                </Typography>
            </Grid>
        </footer >
    )
}

export default FooterComponent;
