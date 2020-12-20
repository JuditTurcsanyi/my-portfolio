import React, {useState} from 'react';
import styled from 'styled-components';
import Projectlist from '../projectdata';
import Project from '../components/Project';
import ProjectDetail from '../components/ProjectDetail';

const Projects = () => {
    const projects = Projectlist();
    const [selectedProject, setSelectedProject] = useState();
    //Add filter options
    let filterList = [""];
    const AddTechnologies = () => {
        projects.map((project) => {
        const listarray = project.tech.split(',' && ', ');
        listarray.forEach((listitem) => {
            filterList.push(listitem);
        });
        for (let i = 0; i < filterList.length; i++) {
            for (let j = i+1; j < filterList.length; j++)
            if (filterList[i] === filterList[j]) {
                filterList.splice(j);
            }
        }
        return filterList.sort();
    })};
    return(
        <div>
            <FilterSection>
                <select onClick={AddTechnologies()} id="filter" name="filter">
                    {filterList.map((item) => {
                        return <option key={item}>{item}</option>;
                    })}
                </select>
            </FilterSection>
            <ProjectList >
                {selectedProject && <ProjectDetail selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}
                {projects.map((project) => (
                    <Project setSelectedProject={setSelectedProject} project={project} name={project.name} date={project.date} tech={project.tech} image={project.image} description={project.description} key={project.id} />
                ) )}
            </ProjectList>
        </div>
    )
}

const ProjectList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    
`

const FilterSection = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    select {
        width: 30%;
        height: 2rem;
        border: solid grey 1px;
        border-radius: 5px;
    }
`

export default Projects;