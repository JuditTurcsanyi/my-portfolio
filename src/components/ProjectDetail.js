import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

const ProjectDetail = ({selectedProject, setSelectedProject}) => {
    const exitProject = () => {
        setSelectedProject();
    }
    return (
        <Shadow>
        <StyledDetails layoutId={selectedProject.id}>
            <button id="exit" onClick={exitProject}>X</button>
            <DetailSection>
                <div className="image">
                    <img src={selectedProject.image} alt="project screenshot"/>
                </div>
                <div className="data">
                    <h3>{selectedProject.name}</h3>
                    <p><span>Created:</span> {selectedProject.date}</p>
                    <p><span>Technologies:</span> {selectedProject.tech}</p>
                    <p><span>Decription:</span> {selectedProject.description}</p>
                </div>
            </DetailSection>
            <ButtonSection>
                <button><span>Go to Project</span><i>&#187;</i></button>
                <button><span>Go to Code</span><i>&#187;</i></button>
            </ButtonSection>
        </StyledDetails>
        </Shadow>
    )
}

const Shadow = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`
const DetailSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 1000px) {
       flex-direction: column;
    }
`
const ButtonSection = styled.div `
    display: flex;
    justify-content: space-around;
    width: 80%;
    
    button {
        margin: 1rem 0 1rem 0;
        padding: 0.7rem 1rem 0.7rem 1rem;
        width: 8.5rem;
        cursor: pointer;
        background: transparent;
        color: white;
        font-weight: 700;
        background: #ff5370;
        border: none;
        border-radius: 2px;
        @media only screen and (max-width: 800px) {
        margin: 0.5rem;
        }
        i {
            opacity: 0;
            display: none;
        }
        &:hover {
            span{
                left: -3rem;
            }
            i {
                opacity: 1;
                display: inline-block;
                padding-left: 0.3rem;
            }
        }    
    }
`

const StyledDetails = styled(motion.div)`
    width: 50%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    z-index: 10;
    @media only screen and (max-width: 1100px) {
       height: 60vh;
       overflow: auto;
       &::-webkit-scrollbar-thumb {
        background: black;
        }
       &::-webkit-scrollbar-track {
        background: transparent;
        margin-top: 10px;
        margin-bottom: 10px;
        }
    }
    #exit {
        position: absolute;
        top: 2rem;
        right: 2rem;
        cursor: pointer;
    }
    
    .data {
        padding: 1.5rem;
        span {
            font-weight: 700;
        }
    }
    .image {
        width: 250px;
        img {
            width: inherit;
        }
    }
`

export default ProjectDetail;