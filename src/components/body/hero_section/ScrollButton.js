import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import '../../../styles/mouseScrollButtonStyles.css'

const ScrollButton = ({ target }) => {
    const theme = useTheme();

    return (
        <div className="scroll-button-container">
            <Link
                to={target}
                smooth={true}
                duration={500}
            >
                <div id="mouse-scroll">
                    <div style={{ border: `2px solid ${theme.palette.primary.main}` }} className="mouse">
                        <div style={{ background: `${theme.palette.primary.main}` }} className="mouse-in"></div>
                    </div>
                    <div>
                        <span style={{ borderRight: `2px solid ${theme.palette.primary.main}`, borderBottom: `2px solid ${theme.palette.primary.main}` }} className="down-arrow-1"></span>
                        <span style={{ borderRight: `2px solid ${theme.palette.primary.main}`, borderBottom: `2px solid ${theme.palette.primary.main}` }} className="down-arrow-2"></span>
                        <span style={{ borderRight: `2px solid ${theme.palette.primary.main}`, borderBottom: `2px solid ${theme.palette.primary.main}` }} className="down-arrow-3"></span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ScrollButton;
