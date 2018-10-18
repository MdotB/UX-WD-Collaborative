import React, { Component } from 'react'
import './Create_Financials.css';
import { Link } from 'react-router-dom';

class Create_Financials extends Component {
  render() {
    return (
      <div className="financials-wrapper">
        <h2>Create Financials</h2>
        <form>
            <label>What are your company's financial goals?</label>
            <p>Summary of Financial Projections</p>
            <input className="financials-inputs" type="text"/>
            <p>Overview of Year/Quarter before</p>
            <input className="financials-inputs" type="text"/>
            <p>Profit or Loss estimates (by time quarter, year, etc.)</p>
            <input className="financials-inputs" type="text"/>
        </form>
        <div className="button-container">
        <Link to="/reports"><button type="submit">To Report!</button></Link>
        </div>
      </div>
    )
  }
}

export default Create_Financials;