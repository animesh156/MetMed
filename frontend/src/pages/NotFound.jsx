import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
        <p className="mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
