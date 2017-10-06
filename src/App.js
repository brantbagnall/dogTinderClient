import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Header from './components/header.js'
import Underheader from './components/Underheader.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Underheader />
      </div>
    );
  }
}

export default App;
