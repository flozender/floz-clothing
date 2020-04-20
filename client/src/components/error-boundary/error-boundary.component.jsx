import React from "react";
import ErrorPrompt from "./error.component";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorPrompt />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
