import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'starjedi';
    src: url('../assets/starjhol.ttf') format('ttf');
  }
  *, *:before, *:after {
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
    /* background-color: #012; */
    background-color:black;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 20px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 30px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 20px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
      }

  a {
    text-decoration: none; 
  }

`;
