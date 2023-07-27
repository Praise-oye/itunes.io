import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        {/* Bootstrap styling */}
        <link rel = "stylesheet"
        href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin = "anonymous" />

        {/* Pathing */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


