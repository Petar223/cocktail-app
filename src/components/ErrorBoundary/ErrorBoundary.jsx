import React from 'react';
import ErrorBoundaryContainer from './components/ErrorBoundaryContainer';
import ErrorBoundaryMessage from './components/ErrorBoundaryMessage';
import { IconDrink } from '../../shared-components/Icons/Icons';
import ErrorBoundaryButton from './components/ErrorBounderyButton';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('Uncaught error:', error, errorInfo);
  }

  resetError() {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <IconDrink width={100} height={100} fill="currentColor" />
          <ErrorBoundaryMessage>Something went wrong.</ErrorBoundaryMessage>
          <ErrorBoundaryButton onClick={this.resetError}>
            Try again
          </ErrorBoundaryButton>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
