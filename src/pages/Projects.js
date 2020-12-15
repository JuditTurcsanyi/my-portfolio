import React, {useState} from 'react';
import styled from 'styled-components';
import Projectlist from '../projectdata';
import Project from '../components/Project'

const Projects = () => {
    const [projects, setProject] = useState(Projectlist());
    return(
        <ProjectList>
            {projects.map((project) => (
                <Project name={project.name} date={project.date} tech={project.tech} image={project.image} key={project.id} />
            ) )}
        </ProjectList>
    )
}

const ProjectList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`

export default Projects;