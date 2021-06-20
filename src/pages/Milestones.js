import React from "react"
import styled from "styled-components"
import Timeline from "../components/Timeline"
import { motion } from "framer-motion"
import { componentsAnimation, component } from "../animations"

const Milestones = () => {
  return (
    <Container
      variants={componentsAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={component} className="milestones">
        <h3>My Road to Become a Frontend Developer</h3>
        <Timeline />
      </motion.div>
      <Goals variants={component}>
        <div className="text">
          <h3>
            These are my current skills and biggest targets for the near
            future*:
          </h3>
          <i>*Subject to change may an amazing opportunity arise ;)</i>
          <p>The Basics</p>
          <input
            type="checkbox"
            className="checkbox"
            name="html"
            checked
            readOnly
          />
          <label htmlFor="html"> HTML</label>
          <br />
          <input type="checkbox" name="css" checked readOnly />
          <label htmlFor="css"> CSS</label>
          <br />
          <input type="checkbox" name="sass" checked readOnly />
          <label htmlFor="sass"> SASS</label>
          <br />
          <input type="checkbox" name="js" checked readOnly />
          <label htmlFor="js"> JavaScript</label>
          <br />
          <input type="checkbox" name="ts" checked="" readOnly />
          <label htmlFor="ts"> TypeScript</label>
          <br />
          <input type="checkbox" name="api" checked readOnly />
          <label htmlFor="api"> APIs</label>
          <br />
          <input type="checkbox" name="harvard" checked="" readOnly />
          <label htmlFor="harvard">
            {" "}
            Harvard CS50x - Introduction to Computer Science
          </label>
          <br />
          <p>JavaScript Libraries, Frameworks</p>
          <input type="checkbox" name="react" checked readOnly />
          <label htmlFor="react"> ReactJS</label>
          <br />
          <input type="checkbox" name="reactn" checked="" readOnly />
          <label htmlFor="reactn"> React Native</label>
          <br />
          <input type="checkbox" name="redux" checked readOnly />
          <label htmlFor="redux"> Redux</label>
          <br />
          <input type="checkbox" name="angular" checked="" readOnly />
          <label htmlFor="angular"> Angular</label>
          <br />
          <p>Version Control</p>
          <input type="checkbox" name="git" checked readOnly />
          <label htmlFor="git"> Git/GitHub</label>
          <br />
          <input type="checkbox" name="AWS" checked readOnly />
          <label htmlFor="AWS"> AWS CodeCommit</label>
          <br />
          <p>Testing Frameworks</p>
          <input type="checkbox" name="postman" checked readOnly />
          <label htmlFor="postman"> Postman</label>
          <br />
          <input type="checkbox" name="selenium" checked="" readOnly />
          <label htmlFor="selenium"> Selenium</label>
          <br />
          <input type="checkbox" name="jest" checked="" readOnly />
          <label htmlFor="jest"> Jest</label>
          <br />
          <input type="checkbox" name="cypress" checked="" readOnly />
          <label htmlFor="cypress"> Cypress</label>
          <br />
          <p>Database Programs</p>
          <input type="checkbox" name="sql" checked="" readOnly />
          <label htmlFor="sql"> SQL</label>
          <br />
          <input type="checkbox" name="mongo" checked="" readOnly />
          <label htmlFor="mongo"> MongoDB</label>
          <br />
        </div>
      </Goals>
    </Container>
  )
}

const Container = styled(motion.div)`
  display: flex;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  .milestones {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    h3 {
      text-align: center;
      margin-bottom: 3rem;
    }
    @media only screen and (max-width: 1200px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`

const Goals = styled(motion.div)`
  width: 50vw;
  padding-bottom: 1rem;
  h3 {
    margin-bottom: 0;
  }
  i {
    font-size: 10px;
  }
  p {
    font-weight: 700;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
    .text {
      padding-left: 2rem;
    }
  }
`

export default Milestones
