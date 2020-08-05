import React from 'react';
import About from './components/About'
import Sidebar from './components/Sidebar';
import Work from './components/Work'

import './App.css';

function App() {
  return (
    <div id="outer-container" className="App">
      <Sidebar />
      <main id="page-wrap">
        <About />
        <hr />
        <Work />
      </main>
    </div>
  );
}

export default App;
