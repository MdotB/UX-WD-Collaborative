import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Plan from '../Plan/Plan';
import Create_MVV from '../Create_MVV/Create_MVV';
import Create_Comp_Analysis from '../Create_Comp_Analysis/Create_Comp_Analysis.js';
import Create_SWOT from '../Create_SWOT/Create_SWOT.js';
import Create_Financials from '../Create_Financials/Create_Financials.js';
import Project from '../Projects/Project';
import Report from '../Report/Report.js';
import { Route } from 'react-router-dom';

class App extends Component {
  state = this.props.data

  // const onChange = (state) => {
  //   console.log(state)
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/plan/create-mvv" render={() => <Create_MVV data={this.state}/>}/>
          <Route path='/plan/create-comp-analysis' render={() => <Create_Comp_Analysis data={this.state}/>}/>
          <Route path='/plan/create_swot_analysis' render={() => <Create_SWOT data={this.state}/>}/>
          <Route path='/plan/create-financials' render={() => <Create_Financials data={this.state}/>}/>
          <Route path='/reports' render={() => <Report data={this.state}/>}/>
          <Route path='/plan' render={() => <Plan data={this.state}/>}/>
          <Route path='/projects/project' render={() => <Project data={this.state}/>}/>
        </main>
      </div>
    )
  }
}

export default App;
