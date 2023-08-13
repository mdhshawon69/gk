'use client';

// Error components must be Client Components

import { useEffect } from 'react';

const Error = ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{
      height: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
    }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
