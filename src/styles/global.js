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
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none; 
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
  }
`;
