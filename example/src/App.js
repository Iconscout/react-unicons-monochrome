import React from 'react';
import UimBox from '@iconscout/react-unicons-monochrome/icons/uim-box'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UimBox size="140" color="#61DAFB" className="App-logo" />
        <p>
          This Box icon is rendered by React Unicons - Monochome Style.
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
