import React, { Component } from 'react'

class Plan extends Component {
    state = {
        mvv: [
            {missionStatement: "Lorem ipsum dolor, sit amet."},
            {vision: "This is our vision."},
            {values: "These are our values."}
        ],
        compAnalyis: [
            {strengths: 'Be a good person.'},
            {cost: 'It costs too much.'},
            {marketShare: '100%'},
            {infrastructure: "Lorem ipsum infrastructure."}
        ],
        swot: {
            s: ['first', 'second', 'third'],
            w: ['first', 'second', 'third'],
            o: ['first', 'second', 'third'],
            t: ['first', 'second', 'third']
        },
        financialProjections: {
            finacialSummary: 'Our financials',
            overviewOfYoY: "This year vs. last year",
            pl: 'revenue minus expenses = profit'
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Plan;
