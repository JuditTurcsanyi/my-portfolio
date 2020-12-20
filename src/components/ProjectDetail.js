import React from 'react'
import styled from 'styled-components';

const ProjectDetail = ({selectedProject, setSelectedProject}) => {
    const exitProject = () => {
        setSelectedProject();
    }
    return (
        <Shadow>
        <StyledDetails>
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
                <button><span>Go to Project</span><icon>&#187;</icon></button>
                <button><span>Go to Code</span><icon>&#187;</icon></button>
            </ButtonSection>
        </StyledDetails>
        </Shadow>
    )
}

const Shadow = styled.div`
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
        icon {
            opacity: 0;
            display: none;
        }
        &:hover {
            span{
                left: -3rem;
            }
            icon {
                opacity: 1;
                display: inline-block;
                padding-left: 0.3rem;
            }
        }    
    }
`

const StyledDetails = styled.div`
    width: 50%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 20%;
    top: 20%;
    z-index: 10;
    
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