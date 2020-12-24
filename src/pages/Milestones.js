import React from 'react';
import styled from 'styled-components';
import Timeline from '../components/Timeline';

const Milestones = () => {
    return(
        <Container>
            <div className="milestones">
                <h3>My Road to Become a Frontend Developer</h3>
                <Timeline />
            </div>
            <Goals>
                <h3>These are my current skills and biggest targets for the near future*:</h3>
                <i>*Subject to change may an amazing opportunity arise ;)</i>
                <p>The Basics</p>
                <input type="checkbox" className="checkbox" name="html" checked readOnly/>
                <label htmlFor="html"> HTML</label><br/>
                <input type="checkbox" name="css" checked readOnly/>
                <label htmlFor="css"> CSS</label><br/>
                <input type="checkbox" name="sass" checked readOnly/>
                <label htmlFor="sass"> SASS</label><br/>
                <input type="checkbox" name="js" checked readOnly/>
                <label htmlFor="js"> JavaScript</label><br/>
                <input type="checkbox" name="api" checked readOnly/>
                <label htmlFor="api"> APIs</label><br/>
                <p>JavaScript Libraries, Frameworks</p>
                <input type="checkbox" name="react" checked readOnly/>
                <label htmlFor="react"> ReactJS</label><br/>
                <input type="checkbox" name="reactn" checked="" readOnly/>
                <label htmlFor="reactn"> React Native</label><br/>
                <input type="checkbox" name="angular" checked="" readOnly/>
                <label htmlFor="angular"> Angular</label><br/>
                <input type="checkbox" name="gatsby" checked="" readOnly/>
                <label htmlFor="gatsby"> Gatsby</label><br/>
                <input type="checkbox" name="gulp" checked="" readOnly/>
                <label htmlFor="gulp"> Gulp</label><br/>
                <p>Version Control System</p>
                <input type="checkbox" name="git" checked readOnly/>
                <label htmlFor="git"> Git/GitHub</label><br/>
                <p>Test Framework</p>
                <input type="checkbox" name="mocha" checked="" readOnly/>
                <label htmlFor="mocha"> Mocha</label><br/>
                <p>Database Programs</p>
                <input type="checkbox" name="sql" checked="" readOnly/>
                <label htmlFor="sql"> SQL</label><br/>
                <input type="checkbox" name="mongo" checked="" readOnly/>
                <label htmlFor="mongo"> MongoDB</label><br/>
                <p>Cloud Computing PlathtmlForms</p>
                <input type="checkbox" name="aws" checked="" readOnly/>
                <label htmlFor="aws"> AWS</label><br/>
            </Goals>
        </Container>
    )
}

const Container = styled.div`
display: flex;
@media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
.milestones {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    background: pink;
    h3 {
        text-align: center;
        margin-bottom: 3rem;
    }
    @media only screen and (max-width: 1100px) {
       width: 100%;
    }
}

`

const Goals = styled.div`
background: lightgreen;
width: 50vw;
h3 {
    margin-bottom: 0;
}
i {
    font-size: 10px;
}
p {
    font-weight: 700;
}
@media only screen and (max-width: 1100px) {
       width: 100%;
    }
`

export default Milestones;