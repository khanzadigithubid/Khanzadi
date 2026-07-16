'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // You can also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-6 py-12">
          <div className="max-w-2xl w-full">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 border border-gray-700">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center">
                  <FaExclamationTriangle className="w-10 h-10 text-red-500" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 text-center mb-8 text-lg">
                We encountered an unexpected error. Don&apos;t worry, it&apos;s not your fault!
              </p>

              {/* Error Details (Development Mode Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-8 bg-gray-900 rounded-lg p-6 border border-red-900/50">
                  <h2 className="text-red-400 font-semibold mb-3 text-sm">
                    Error Details (Development Only):
                  </h2>
                  <pre className="text-red-300 text-xs overflow-x-auto whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <details className="mt-4">
                      <summary className="text-red-400 cursor-pointer text-sm hover:text-red-300">
                        Stack Trace
                      </summary>
                      <pre className="text-red-300 text-xs mt-2 overflow-x-auto whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-semibold"
                >
                  <FaRedo className="mr-2" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-semibold border border-gray-600"
                >
                  <FaHome className="mr-2" />
                  Go Home
                </button>
              </div>

              {/* Support Message */}
              <p className="text-gray-400 text-center mt-8 text-sm">
                If the problem persists, please{' '}
                <a
                  href="/Contact"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
