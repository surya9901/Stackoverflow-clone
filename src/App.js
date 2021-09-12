import './App.css';
import Navbar from './Navbar';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from './Content';
import Sidebar from './sidebar';

function App() {



  return (
    <>
      <Router>
        <Navbar />
        <div class="wrapper">
          <div class="row">
            <div class="col-lg-2">
              <div class="sidebar-wrapper">
                <Sidebar />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content-wrapper" style={{ "border-left": "2px solid grey", "border-right": "2px solid grey" }}>
                <Content />
              </div>
            </div>
            <div class="col-lg-4">
              <h4>
                Tags:
              </h4>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
