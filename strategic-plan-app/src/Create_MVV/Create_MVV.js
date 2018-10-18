import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create_MVV.css';

class Create_MVV extends Component {
  render() {
    return (
      <div className="mvv-container">
        <h2>Mission, Vision, and Values</h2>
        <form>
            <label>Mission Statement</label>
            <p>Describe your company's overarching purpose.  Who is your company?</p>
            <input className="mvv-inputs" type="text" placeholder="Type your company mission statement here..."></input>
            <label>Vision</label>
            <p>What does your company seek to achieve?  Where do you see your company in 5-10 years?</p>
            <input className="mvv-inputs" type="text" placeholder="Type your vision here..."></input>
            <label>Values</label>
            <p>What are the principles that guide your company?</p>
            <input className="mvv-inputs" type="text" placeholder="Type your values here..."></input>
        </form>
        <div className="button-container">
        <Link to="/plan/create-comp-analysis"><button type="submit">Next</button></Link>
        </div>
        
      </div>
    )
  }
}
export default Create_MVV;
