import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
  li {
            list-style: none;
            cursor: pointer;
        }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
 
export default GlobalStyle;