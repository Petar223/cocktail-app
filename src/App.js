import Root from './components/Root/Root';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useMode, ColorModeContext } from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle/GlobalStyle';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ErrorBoundary>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Root />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
