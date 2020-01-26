import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
  }
  body {
    font-family: 'Exo 2', Arial, sans-serif;
    font-size: 16px;
    background-color: #012;
  }
  a {
    text-decoration: none; 
  }

`;
