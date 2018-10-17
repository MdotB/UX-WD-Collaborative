import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Plan from '../Plan/Plan';
import Project from '../Projects/Project'
import { Route } from 'react-router-dom';
class App extends Component {
  state = {
    data: this.props.data
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/plan/mvv' render={() => <Plan data={this.props.data}/>}/>
          <Route path='/projects/project' render={() => <Project data={this.props.data}/>}/>
        </main>
      </div>
    );
  }
}

export default App;
