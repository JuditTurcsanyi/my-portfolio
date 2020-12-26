import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Project = ({project, setSelectedProject}) => {
    
    const showDetail = () => {
        setSelectedProject(project);
    }
    return(
        <StyledCard layoutId={project.id} onClick={showDetail}>
            <div className="image">
                <img src={project.image} alt="project screenshot"/>
            </div>
            <div className="description">
                <h3>{project.name}</h3>
                <p>Created: {project.date}</p>
                <p>Technologies: {project.tech}</p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled(motion.div)`
display: flex;
justify-content: space-around;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
border-radius: 1rem;
overflow: hidden;
margin: 3rem;
padding: 2rem;
@media only screen and (max-width: 800px) {
       flex-direction: column;
       align-items: center;
    }
cursor: pointer;
    .description {
        padding: 1.5rem;
    }
    .image {
        width: 250px;
        img {
            width: inherit;
        }
    }
&:hover {
    transform: scale(1.02);
}    
`

export default Project;