import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import CreateMVV from '../Create_MVV/Create_MVV';
import CreateCompAnalysis from '../Create_Comp_Analysis/Create_Comp_Analysis.js';
import CreateSWOT from '../Create_SWOT/Create_SWOT.js';
import CreateFinancials from '../Create_Financials/Create_Financials.js';
import Project from '../Projects/Project';
import Report from '../Report/Report.js';
import { Route } from 'react-router-dom';

class App extends Component {
  state = this.props.data

  handleMVVChange = (e) => {
    this.setState({ 
        [e.target.id]: e.target.value
    })
  }
  handleCompAnalysisChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleFinancialChange = (e) => {
    this.setState({
      financials: { 
        [e.target.id]: e.target.value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Successful")
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/plan/create-mvv" render={() => <CreateMVV data={this.state} handleMVVChange={this.handleMVVChange}/>}/>
          <Route path='/plan/create-comp-analysis' render={() => <CreateCompAnalysis data={this.state.compAnalysis} handleCompAnalysisChange={this.handleCompAnalysisChange}/>}/>
          <Route path='/plan/create_swot_analysis' render={() => <CreateSWOT data={this.state}/>}/>
          <Route path='/plan/create-financials' render={() => <CreateFinancials data={this.state.financials} handleFinancialChange={this.handleFinancialChange}/>}/>
          <Route path='/reports' render={() => <Report data={this.state}/>}/>
          {/* <Route path='/plan' render={() => <Plan data={this.state}/>}/> */}
          <Route path='/projects/project' render={() => <Project data={this.state}/>}/>
        </main>
      </div>
    )
  }
}

export default App;
