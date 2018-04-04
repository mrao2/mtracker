import React, { Component } from 'react';
import { creatStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//import routes from './routes.js'
import Header from './components/header.js';
import Home from './components/home.js'
import Dashboard from './components/Dashboard.js'




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div>
            <Route exact path="/mtracker/" component={Home} />
            <Route exact path="/mtracker/Dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
