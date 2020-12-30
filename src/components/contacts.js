import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <Contact>
            <FontAwesomeIcon icon={faGithub} size="3x" color="grey" className="github" onClick={()=> window.open("https://github.com/JuditTurcsanyi", "_blank")} />
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="grey" className="linkedin" onClick={()=> window.open("https://www.linkedin.com/in/judit-turcs%C3%A1nyi-cams-b6a52bb0/", "_blank")} />
            <FontAwesomeIcon icon={faEnvelope} size="3x" color="grey" className="email" onClick={()=>window.open('mailto:judit.turcsanyi@hotmail.com')} />
        </Contact>
    )
}

const Contact = styled.div`
    position: fixed;
    right: 5px;
    height: 200px;
    top: calc(50% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .github {
        &:hover{
            color: #24292E;
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    .linkedin {
        &:hover{
            color: #0A66C2;
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    .email {
        &:hover{
            color: purple;
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`

export default Contacts
