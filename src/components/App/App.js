import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewReflection from '../NewReflection/NewReflection.js';
import ViewReflection from '../ViewReflection/ViewReflection.js';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Oh, the places you've been</h1>
            <h4><i>Prime Digital Academy Reflection</i></h4>
          </header>
          <nav>
            <ul>

              <li>
                <Link to="/add">Add New Reflection</Link>
              </li>
              <li>
                <Link to="/view">View Reflection</Link>
              </li>
            </ul>
          </nav>
          <br />
          <Route path="/add" component={NewReflection} />
          <Route path="/view" component={ViewReflection} />
        </div>
      </Router>
    );
  }
}

export default App;


