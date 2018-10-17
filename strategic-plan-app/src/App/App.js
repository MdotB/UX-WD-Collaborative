import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Plan from '../Plan/Plan';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/plan' render={() => <Plan />}/>
      </div>
    );
  }
}

export default App;
