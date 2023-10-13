import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-red-500" style={{ position: 'absolute' }}></div>
    </div>
  );
};

export default Spinner;
