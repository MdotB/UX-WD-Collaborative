import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create_Comp_Analysis.css';

class CreateCompAnalysis extends Component {
  render() {
    return (
      <div className="comp-analysis-container">
      <h2>Competitive Analysis</h2>
      <table>
        <tbody>
        <tr>
          <th className="empty"></th>
          <th>Strength</th>
          <th>Cost</th> 
          <th>Market Share</th>
          <th>Infrastructure</th> 
          <th>Other</th>
        </tr>
        <tr>
          <th className="row-header">Company 1</th>
          <td><input id="strengths" onChange={this.props.handleChange} type="text"></input></td>
          <td><input id="cost" onChange={this.props.handleChange} type="text"></input></td>
          <td><input id="marketShare" onChange={this.props.handleChange} type="text"></input></td>
          <td><input id="infrastructure" onChange={this.props.handleChange} type="text"></input></td>
          <td><input id="other" onChange={this.props.handleChange} type="text"></input></td>
        </tr>
        <tr>
          <th className="row-header">Company 2</th>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <th className="row-header">Company 3</th>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
        </tr>
        </tbody>
      </table>
      <div>
        <Link to="/plan/create-financials"><button>Next</button></Link>
      </div>
      </div>
    )
  }
}

export default CreateCompAnalysis;