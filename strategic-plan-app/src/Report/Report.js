import React, { Component } from 'react';
import './Report.css';

class Report extends Component {
  render() {
    return (
      <div>
        <h1>Strategic Plan</h1>

        <h2 className="report">Mission, Vision, and Values</h2>
        <h4>Mission Statement</h4>
        <p>{this.props.data.mvv.missionStatement}</p>
        <h4>Vision</h4>
        <p>{this.props.data.mvv.vision}</p>
        <h4>Values</h4>
        <p>{this.props.data.mvv.values}</p>

        <h2 className="report">Competitive Analysis</h2>
        <h4>Company 1</h4>
        <li>Strengths: {this.props.data.compAnalysis[0].strengths}</li>
        <li>Cost: {this.props.data.compAnalysis[1].cost}</li>
        <li>Market Share: {this.props.data.compAnalysis[2].marketShare}</li>
        <li>Infrastructure: {this.props.data.compAnalysis[3].infrastructure}</li>

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
