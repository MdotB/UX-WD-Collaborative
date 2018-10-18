import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create_Comp_Analysis.css';

class Create_Comp_Analysis extends Component {
  render() {
    return (
      <div className="comp-analysis-container">
      <h2>Competitive Analysis</h2>
      <table>
        <tr>
          <th className="empty"></th>
          <th>Strength</th>
          <th>Cost</th> 
          <th>Market Share</th>
          <th>Infastructure</th> 
          <th>Other</th>
        </tr>
        <tr>
          <th className="row-header">Company 1</th>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
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
        <tr>
          <th className="row-header">Company 4</th>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <th className="row-header">Company 5</th>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
          <td><input type="text"></input></td>
        </tr>
      </table>
      <div>
        <Link to="/plan/create-financials"><button>Next</button></Link>
      </div>
      </div>
    )
  }
}

export default Create_Comp_Analysis;