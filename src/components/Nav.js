import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faCode, faTrophy, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Nav() {
    return (
      <StyledNav>
        
        <ul>
            <li><Link to="/" ><FontAwesomeIcon icon={faFemale} /> About Me</Link></li>
            <li><Link to="/projects" ><FontAwesomeIcon icon={faCode} /> Projects</Link></li>
            <li><Link to="/milestones" ><FontAwesomeIcon icon={faTrophy} /> Milestones & Goals</Link></li>
            <li><Link to="/travels" ><FontAwesomeIcon icon={faGlobeAmericas} /> Travels</Link></li>
        </ul>
        
      </StyledNav>
    );
  }
  
const StyledNav = styled.div`
    background: #010005;
    padding: 1rem;
    ul {
        display: flex;
        justify-content: space-around;
        li {
            color: white;
        }
    }
`

  export default Nav;