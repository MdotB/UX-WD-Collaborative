import React, { Component } from 'react'
import './Create_SWOT.css';
import { Link } from 'react-router-dom';

class Create_SWOT extends Component {
  render() {
    return (
      <div>
        <h2>S.W.O.T. Analysis</h2>
        <form>
            
        </form>
        <Link to="plan/create-financials"><button>Next</button></Link>
      </div>
    )
  }
}

export default Create_SWOT;