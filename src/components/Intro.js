import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Intro = () => {
    return (
        <StyledIntro>
            <div className="introduction">
                <p>Hello and Welcome to my Portfolio Website!</p>
                <p>I am Judit Turcsanyi, a Junior Frontend/React developer.</p>
                <p>Check out my Portfolio and get in touch if you are interested to work with me!</p>
            </div>
            
        </StyledIntro>
    )
}

const StyledIntro = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 68vh;
    margin: 0 5rem;
`

export default Intro;