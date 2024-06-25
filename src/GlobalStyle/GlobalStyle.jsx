import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.background};
    margin: 0;
  padding: 0;
  height: 100%;
  }
`;

export default GlobalStyle;
