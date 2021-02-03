
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lato", sans-serif;
    background-color: #111;
    box-sizing: border-box;
    
  }
    h1{
        text-transform: uppercase;
        margin: 0;
        padding: 10px 20px;
        color: white;
        font-size: 3rem;
        font-weight: 50;
        text-align: center;
        margin: 1rem 0 3rem; 
        font-family: "Lato", sans-serif;
    }
`;