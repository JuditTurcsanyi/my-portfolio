import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
    return (
        <StyledIntro>
            <div className="introduction">
                <code>&lt;!DOCTYPE html&gt;</code><br />
                <code>&lt;html&gt;</code><br />
                <code>&lt;title&gt;</code>About Me
                <code>&lt;/title&gt;</code><br />
                <code>&lt;body&gt;</code><br /><br />
                <code>&lt;h1&gt;</code>
                Hello and Welcome to my Portfolio Website!
                <code>&lt;/h1&gt;</code><br /><br />
                <code>&lt;p&gt;</code>
                I am Judit Turcsanyi, a Junior Frontend developer looking for<br />the opportunity that allows me to create awesome websites!
                <code>&lt;/p&gt;</code><br /><br />
                <code>&lt;p&gt;</code>
                Technologies I <span>&#10084;</span> to work with include:
                <code>&lt;/p&gt;</code><br />
                <code>&lt;ul&gt;</code><br />
                <div className="li">
                    <code>&lt;li&gt;</code>HTML/CSS
                    <code>&lt;/li&gt;</code><br />
                    <code>&lt;li&gt;</code>JavaScript
                    <code>&lt;/li&gt;</code><br />
                    <code>&lt;li&gt;</code>ReactJS
                    <code>&lt;/li&gt;</code><br />
                </div>
                <code>&lt;/ul&gt;</code><br /><br />
                <code>&lt;p&gt;</code>
                I am glad to have you here! Check out my portfolio and reach out to me!
                <code>&lt;/p&gt;</code><br />
                <code>&lt;/body&gt;</code><br />
                <code>&lt;/html&gt;</code>
            </div>
            <div className="contact">
                <FontAwesomeIcon icon={faGithub} size="3x" color="grey" className="github" onClick={()=> window.open("https://github.com/JuditTurcsanyi", "_blank")} />
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="grey" className="linkedin" onClick={()=> window.open("https://www.linkedin.com/in/judit-turcs%C3%A1nyi-cams-b6a52bb0/", "_blank")} />
                <FontAwesomeIcon icon={faEnvelope} size="3x" color="grey" className="email" onClick={()=>window.open('mailto:judit.turcsanyi@hotmail.com')} />
            </div>
        </StyledIntro>
    )
}

const StyledIntro = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    position: relative;
    span {
        color: #ff5370;
    }
    code {
        color: #ff5370;
        }
    .li {
        position: relative;
        left: 15px;
    }
    .contact {
        width: 15rem;
        display: flex;
        justify-content: space-around;
        .github {
            &:hover{
                color: black;
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
        
    }
`

export default Intro;