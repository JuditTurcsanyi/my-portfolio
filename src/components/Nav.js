import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faCode, faTrophy, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
      <StyledNav>
        <ul>
            <li><FontAwesomeIcon icon={faFemale} /> About Me</li>
            <li><FontAwesomeIcon icon={faCode} /> Projects</li>
            <li><FontAwesomeIcon icon={faTrophy} /> Milestones & Goals</li>
            <li><FontAwesomeIcon icon={faGlobeAmericas} /> Travels</li>
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