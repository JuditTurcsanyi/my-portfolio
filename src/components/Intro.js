import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import {introAnimation, item} from '../animations'


const Intro = () => {
    return (
        <StyledIntro>
            <motion.div variants={introAnimation} initial="hidden" animate="show" className="introduction">
                <motion.p variants={item}>Hello and Welcome!</motion.p>
                <motion.p variants={item}>I am Judit Turcsanyi, a Junior Frontend/React developer.</motion.p>
                <motion.p variants={item}>Check out my <span><Link to="/projects" >Portfolio</Link></span> and get in touch if you are interested to work with me!</motion.p>
            </motion.div>
            
        </StyledIntro>
    )
}

const StyledIntro = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 68vh;
    margin: 0 5rem;
    p {
        font-size: 20px;
    }
    p:nth-child(1) {
        font-size: 22px;
        font-weight: 700;
    }
    span {
        cursor: pointer;
        font-weight: 700;
        &:hover {
            color:  #ff5370;
        }
    }
`

export default Intro;