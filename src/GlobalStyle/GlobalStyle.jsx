import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    display: inherit;
    background: ${({ theme }) => theme.background};
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
