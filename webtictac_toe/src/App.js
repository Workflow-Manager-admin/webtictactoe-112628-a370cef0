import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <span style={{ color: '#2196F3', fontWeight: 500 }}>WebTicTacToe</span>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ marginTop: 120 }}>
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;