import React from 'react';
import About from './components/About'
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div id="outer-container" className="App">
      <Sidebar />
      <main id="page-wrap">
        <About />
        <hr />
      </main>
    </div>
  );
}

export default App;
