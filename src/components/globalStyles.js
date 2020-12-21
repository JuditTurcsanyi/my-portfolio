import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: #F9F9F9;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
  option {
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
  
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 5px;
    
  }
  &::-webkit-scrollbar-track {
    background: #F9F9F9;
  }
`;
 
export default GlobalStyle;