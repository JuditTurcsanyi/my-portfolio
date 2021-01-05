import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify-icons/logos/redux';
import html5 from '@iconify-icons/logos/html-5';
import css3 from '@iconify-icons/logos/css-3';
import sassIcon from '@iconify-icons/logos/sass';
import reactIcon from '@iconify-icons/logos/react';
import javascriptIcon from '@iconify-icons/logos/javascript';
import es6Icon from '@iconify-icons/logos/es6';
import fileTypeNpm from '@iconify-icons/vscode-icons/file-type-npm';
import fileTypeVscode from '@iconify-icons/vscode-icons/file-type-vscode';
import gitIcon from '@iconify-icons/logos/git';
import githubIcon from '@iconify-icons/logos/github-icon';
import logo from './styled-components.png';

const Logos = () => {
    return (
        <Container>
        <Banner>
            <LogoSection1>
                <Icon class="icon" icon={html5} width="50" height="50" />
                <Icon class="icon" icon={css3} width="50" height="50" />
                <Icon class="icon" icon={sassIcon} width="50" height="50" />
                <Icon class="icon" icon={javascriptIcon} width="50" height="50" />
                <Icon class="icon" icon={es6Icon} width="50" height="50" />
                <Icon class="icon" icon={reactIcon} width="50" height="50" />
                <Icon class="icon" icon={reduxIcon} width="50" height="50" />
                <img class="icon" src={logo} width="50" height="50" alt="styled-components"/>
                <Icon class="icon" icon={fileTypeNpm} width="50" height="50" />
                <Icon class="icon" icon={fileTypeVscode} width="50" height="50" />
                <Icon class="icon" icon={gitIcon} width="50" height="50" />
                <Icon class="icon" icon={githubIcon} width="50" height="50" />
            </LogoSection1>
            <LogoSection2>
                <Icon class="icon" icon={html5} width="50" height="50" />
                <Icon class="icon" icon={css3} width="50" height="50" />
                <Icon class="icon" icon={sassIcon} width="50" height="50" />
                <Icon class="icon" icon={javascriptIcon} width="50" height="50" />
                <Icon class="icon" icon={es6Icon} width="50" height="50" />
                <Icon class="icon" icon={reactIcon} width="50" height="50" />
                <Icon class="icon" icon={reduxIcon} width="50" height="50" />
                <img class="icon" src={logo} width="50" height="50" alt="styled-components"/>
                <Icon class="icon" icon={fileTypeNpm} width="50" height="50" />
                <Icon class="icon" icon={fileTypeVscode} width="50" height="50" />
                <Icon class="icon" icon={gitIcon} width="50" height="50" />
                <Icon class="icon" icon={githubIcon} width="50" height="50" />
            </LogoSection2>
            {/* <LogoSection3>
                <Icon class="icon" icon={html5} width="50" height="50" />
                <Icon class="icon" icon={css3} width="50" height="50" />
                <Icon class="icon" icon={sassIcon} width="50" height="50" />
                <Icon class="icon" icon={javascriptIcon} width="50" height="50" />
                <Icon class="icon" icon={es6Icon} width="50" height="50" />
                <Icon class="icon" icon={reactIcon} width="50" height="50" />
                <Icon class="icon" icon={reduxIcon} width="50" height="50" />
                <img class="icon" src={logo} width="50" height="50" alt="styled-components"/>
                <Icon class="icon" icon={fileTypeNpm} width="50" height="50" />
                <Icon class="icon" icon={fileTypeVscode} width="50" height="50" />
                <Icon class="icon" icon={gitIcon} width="50" height="50" />
                <Icon class="icon" icon={githubIcon} width="50" height="50" />
            </LogoSection3> */}
        </Banner>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 55px;
display: flex;
justify-content: center;
`

const Banner = styled.div`
width: 1000px;
height: 55px;
display: flex;
justify-content: flex-start;
overflow: hidden;
`

const logoanimation = keyframes`
 0% {
        transform: translateX(0%);
    };
    100% {
        transform: translateX(-100%);
    };
`



const LogoSection1 = styled.div`
height: 55px;
display: flex;
justify-content: space-around;
width: 1000px;
animation: ${logoanimation} 10s infinite;
animation-timing-function: linear;
.icon {
    margin: 0 1.1rem;
}
`

const LogoSection2 = styled.div`
height: 55px;
display: flex;
width: 1000px;
justify-content: space-around;
animation: ${logoanimation} 10s infinite;
animation-timing-function: linear;
.icon {
    margin: 0 1.1rem;
}
`


export default Logos;
