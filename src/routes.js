import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home.js'
import dashboard from './components/Dashboard.js'

const routes = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" compoment={Home} />
        <Route exact path="/dashboard" compoment={dashboard} />
      </div>
    </Router>
)}
export default routes
