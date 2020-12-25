import React, {useState} from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Projectlist from '../projectdata';
import Project from '../components/Project';
import ProjectDetail from '../components/ProjectDetail';

const Projects = () => {
    let [projects, setProjects] = useState(Projectlist());
    let options = [];
    const [selectedProject, setSelectedProject] = useState();
    //Add filter options
    let filterList = [];
    const AddTechnologies = () => {
        Projectlist().map((project) => {
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
            return filterList;
        })
        //Add select options
        filterList.sort().map((item) => {
            options.push({label: `${item}`, value:`${item}`});
            return options;
        })
        options.unshift({label: "Select All", value:"Select All"});
    };

    //Filter Projects
    const filterProjects = (e) => {
        //1. Filter value
        const selectedTech = e.value;

        //2. Select projects that contain filter value
        const filterProjectArray = (array, value) => {
            return array.filter(o =>
                Object.keys(o).some(k => o[k].toLowerCase().includes(value.toLowerCase())));
        }
        const filteredProjects = filterProjectArray(Projectlist(), selectedTech);
        
        //3. Modify projects state
        if (e.value === "Select All") {
            setProjects(Projectlist())
        } else {
        setProjects(filteredProjects);
        }
    }

    return(
        <div>
            <FilterSection>
                <Select options={options} className="select" onChange={filterProjects} onClick={AddTechnologies()} id="filter" name="filter"/>
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
    @media only screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
`

const FilterSection = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    .select {
        width: 30%;
    }
`

export default Projects;