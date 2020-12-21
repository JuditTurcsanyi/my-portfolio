import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <FooterSection>
            <hr/>
            <p><b>Judit Turcsanyi</b> &copy; 2021. Made with React <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </p>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
    text-align: center;
    width: 100%;
    color: grey;
    font-size: 12px;
    position: relative;
    bottom: 0;
    hr {
        color: grey;
        width: 80vw;
    }
    p {
        padding: 0.5rem 0 0.5rem 0;
    }
`

export default Footer;