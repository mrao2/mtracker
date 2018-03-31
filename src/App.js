import React, { Component } from 'react';
import { creatStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './components/header.js';
import Home from './components/home.js'




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
