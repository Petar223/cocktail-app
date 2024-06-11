import './App.css';
import Root from './components/Root/Root';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  );
}

export default App;
