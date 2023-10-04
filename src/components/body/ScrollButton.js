import React from 'react';
import { Link } from 'react-scroll';
import '../../styles/mouseScrollButtonStyles.css';

const ScrollButton = ({ target }) => {
    return (
        <div className="scroll-button-container">
            <Link
                to={target}
                smooth={true}
                duration={500}
            >
                <div id="mouse-scroll">
                    <div class="mouse">
                        <div class="mouse-in"></div>
                    </div>
                    <div>
                        <span class="down-arrow-1"></span>
                        <span class="down-arrow-2"></span>
                        <span class="down-arrow-3"></span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ScrollButton;
