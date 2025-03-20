// src/App.jsx
import React from 'react';
import { Web3Provider } from './contexts/Web3Context';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Web3Provider>
      <div className="App">
        <Navbar />
        {/* Other components and pages */}
      </div>
    </Web3Provider>
  );
}

export default App;
