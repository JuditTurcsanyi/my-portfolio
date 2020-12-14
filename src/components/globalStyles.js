import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  li {
            list-style: none;
            cursor: pointer;
        }
`;
 
export default GlobalStyle;