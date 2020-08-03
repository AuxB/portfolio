import React from 'react';
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  return (
    <div id="outer-container" className="App">
      <Sidebar />
      <main id="page-wrap">
        <div className="window-wrapper">
          <div className="top-blank">
            <h1>Auxence Blondel</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
