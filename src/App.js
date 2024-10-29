import Root from './components/Root/Root';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useMode, ColorModeContext } from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { NotificationProvider } from './context/NotificationContext';
import ErrorHandler from './interceptors/ErrorHandler/ErrorHandler';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ErrorBoundary>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NotificationProvider>
            <GlobalStyle />
            <ErrorHandler>
              <Root />
            </ErrorHandler>
          </NotificationProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
