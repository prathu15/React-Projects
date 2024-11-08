import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-screen h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>
        <button
          onClick={() => setColor('green')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'yellow' }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor('orange')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'orange' }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor('pink')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'pink' }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor('blue')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
