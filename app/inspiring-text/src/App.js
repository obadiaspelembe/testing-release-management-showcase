import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleClick = () => {
    setText('Your inspiring text goes here');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Inspiring Text Generator</h1>
        <div className="mt-10 mb-10 text-gray-700">
          {text || 'Your text appear here'}
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Click me
        </button>

      </div>
    </div>
  );
};

export default App;