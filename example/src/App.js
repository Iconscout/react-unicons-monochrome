import React from 'react';
import { UimAdobe }  from '@iconscout/react-unicons-monochrome'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UimAdobe size="140" color="#61DAFB" className="App-logo" />
        <p>
          This React icon is rendered by React Unicons.
        </p>
        <a
          className="App-link"
          href="https://iconscout.com/unicons"
          target="_blank"
          rel="noopener noreferrer"
        >
          View React Unicons
        </a>
      </header>
    </div>
  );
}

export default App;
