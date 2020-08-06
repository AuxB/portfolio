import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackOffice from './components/BackOffice';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Work from './components/Work';

import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <div id="outer-container" className="App">
            <Sidebar />
            <main id="page-wrap">
              <About />
              <hr />
              <Work />
            </main>
          </div>
        </Route>
        <Route path="/back-office" component={BackOffice} />
      </Switch>
    </Router>
  );
}

export default App;
