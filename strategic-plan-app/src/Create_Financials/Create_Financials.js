import React, { Component } from 'react'
import './Create_Financials.css';
import { Link } from 'react-router-dom';

class CreateFinancials extends Component {
  render() {
    return (
      <div className="financials-wrapper">
        <h2>Create Financials</h2>
        <form>
            <label>What are your company's financial goals?</label>
            <p>Summary of Financial Projections</p>
            <input id="financialSummary" onChange={this.props.handleChange} className="financials-inputs" type="text"/>
            <p>Overview of Year/Quarter before</p>
            <input id="YoY"className="financials-inputs" onChange={this.props.handleChange} type="text"/>
            <p>Profit or Loss estimates (by time quarter, year, etc.)</p>
            <input id="pl"className="financials-inputs" onChange={this.props.handleChange} type="text"/>
        </form>
        <div className="button-container">
        <Link to="/reports"><button type="submit">To Report!</button></Link>
        </div>
      </div>
    )
  }
}

export default CreateFinancials;