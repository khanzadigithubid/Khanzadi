# How to Test Error Boundary

## Method 1: Using the Test Component

1. Open any page file (e.g., `src/app/page.tsx`)
2. Import the test component:
   ```typescript
   import ErrorBoundaryTest from './components/ErrorBoundaryTest';
   ```
3. Add it to the JSX:
   ```typescript
   <ErrorBoundaryTest />
   ```
4. Run `npm run dev`
5. Click the "Test Error Boundary" button
6. Error Boundary will show the fallback UI

## Method 2: Simulate Component Crash

Add this to any component to test:
```typescript
if (Math.random() > 0.5) {
  throw new Error('Random error for testing!');
}
```

## What to Expect

When an error occurs:
- ✅ Error Boundary catches the error
- ✅ Fallback UI is displayed with error icon
- ✅ "Try Again" button resets the error state
- ✅ "Go Home" button redirects to homepage
- ✅ Error details shown in development mode only
- ✅ Rest of the site continues to work normally

## Clean Up

Remember to remove the test component after testing!
