import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    display: inherit;
    background: ${({ theme }) => `url(${theme.backgroundImage})`}, ${({ theme }) => theme.background};
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    position: relative;
  }


`;

export default GlobalStyle;
