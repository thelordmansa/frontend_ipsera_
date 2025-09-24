'use client';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Report error to monitoring service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">500 – Internal Server Error</h1>
        <p className="text-sm">Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
}