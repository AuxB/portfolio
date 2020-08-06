import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import BackOffice from './components/BackOffice';
import ExpTimeline from './components/ExpTimeline';
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
            <main className="page-wrap">
              <About />
              <hr />
              <Work />
              <hr />
              <ExpTimeline />
            </main>
          </div>
        </Route>
        <Route path="/back-office" component={BackOffice} />
      </Switch>
    </Router>
  );
}

export default App;
