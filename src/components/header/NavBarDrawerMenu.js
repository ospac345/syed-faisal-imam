import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';



export default function NavBarDrawerMenu() {
    const [state, setState] = useState({
        top: false,
    });
    const [navClick, setNavClick] = useState(false);

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


    useEffect(() => {
        setTimeout(() => {
            const hash = window.location.hash;
            if (hash) document.querySelector(hash).scrollIntoView();
        }, 0);
    }, [navClick])

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ letterSpacing: '0.5em', padding: '15px' }}>



                <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em' }}>
                        home
                    </Typography>
                </Link>



                <Link href="/#about" scroll={true} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em' }}>
                        about
                    </Typography>
                </Link>


                <Link href='/#projects' scroll={false} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em' }}>
                        projects
                    </Typography>
                </Link>


                <Link href='/#contact' scroll={false} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em' }}>
                        contact
                    </Typography>
                </Link>

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
