import React, { Component } from 'react';
import './Report.css';

class Report extends Component {
  render() {
    return (
      <div className="report-container">

        <h1 className="report h1">Strategic Plan</h1>

        
          <h2 className="mvv-header">Mission | Vision | Values</h2>
          <div className="MVV-wrapper">
            <div className="missionStatment-wrapper">
              <h4>Mission</h4>
              <p>{this.props.data.missionStatement}</p>
            </div>
            <div className="vision-wrapper">
              <h4>Vision</h4>
              <p>{this.props.data.vision}</p>
            </div>
            <div className="vision-wrapper">
              <h4>Values</h4>
              <p>{this.props.data.values}</p>
            </div>
          </div>

        <h2 className="competitive-analysis-header">Competitive Analysis</h2>
        <h4>Company 1</h4>
        <li>Strengths: {this.props.data.strengths}</li>
        <li>Cost: {this.props.data.cost}</li>
        <li>Market Share: {this.props.data.marketShare}</li>
        <li>Infrastructure: {this.props.data.infrastructure}</li>

        <h2 className="report">Financial Projections</h2>
        <h4>Financial Summary</h4>
        <p>{this.props.data.financials.financialSummary}</p>
        <h4>Overview of YoY Comparison</h4>
        <p>{this.props.data.financials.YoY}</p>
        <h4>Profit & Loss Projection</h4>
        <p>{this.props.data.financials.pl}</p>

      </div>
    )
  }
}

export default Report;