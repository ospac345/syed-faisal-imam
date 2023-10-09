import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function NavBarDrawerMenu() {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ letterSpacing: '0.5em' }}>
                {['home', 'about', 'projects', 'contact'].map((text, index) => (
                    <><ListItem key={text} disablePadding>
                        <ListItemButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em' }}>
                                {text}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    </>
                ))}
            </List>
            <Divider variant='middle' />
            <List>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', p: 1, m: 1 }}>
                    <div>
                        <Link href="mailto:i.syed.faisal@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="email"><AlternateEmailIcon /></IconButton>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/in/syed-faisal-imam-gcu/" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="linkedin"><LinkedInIcon /></IconButton>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.facebook.com/ospac345" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="facebook"><FacebookIcon /></IconButton>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://github.com/ospac345" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="github"><GitHubIcon /></IconButton>
                        </Link>
                    </div>

                    <div>
                        <Link href="https://wa.me/447480976762" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="whatsapp"><WhatsAppIcon /></IconButton>
                        </Link>
                    </div>
                </Box>
            </List>
        </Box >
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} color="primary">
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
