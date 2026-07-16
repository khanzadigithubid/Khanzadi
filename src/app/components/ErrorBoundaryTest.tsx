'use client';

import { useState } from 'react';

/**
 * Test component to demonstrate Error Boundary functionality
 *
 * Usage: Import this component anywhere and click the button to trigger an error
 * The Error Boundary will catch it and show the fallback UI
 *
 * To test:
 * 1. Import in any page: import ErrorBoundaryTest from './components/ErrorBoundaryTest'
 * 2. Add to JSX: <ErrorBoundaryTest />
 * 3. Click "Trigger Error" button
 * 4. Error Boundary will catch the error and show fallback UI
 */

export default function ErrorBoundaryTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // This will trigger the Error Boundary
    throw new Error('Test error triggered by ErrorBoundaryTest component!');
  }

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <button
        onClick={() => setShouldError(true)}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg text-sm font-semibold transition-all duration-300"
      >
        🧪 Test Error Boundary
      </button>
    </div>
  );
}
