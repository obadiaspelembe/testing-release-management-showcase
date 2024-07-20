import React, { useState } from 'react';

export const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [text, setText] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch(`${API_URL}/inspire`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setText(`"${data.phrase}" - ${data.author}`);
    } catch (error) {
      setText('Failed to fetch inspiring text');
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Inspiring Text Generator</h1>
        <div className="m-4 text-gray-700 bg-sky-200 p-2">
          <span class="italic decoration-solid">{text || 'Your text appear here'}</span>
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