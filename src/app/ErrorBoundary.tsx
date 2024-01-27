import { Component, ErrorInfo, ReactNode } from "react";

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center space-y-4">
          <h2 className="text-white">Oops! someone is getting fired! 😶 </h2>
          <button className="bg-blue-400 hover:bg-blue-600 rounded px-2 text-white py-2" onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
