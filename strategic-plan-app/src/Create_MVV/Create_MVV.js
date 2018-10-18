import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create_MVV.css';

class CreateMVV extends Component {
  render() {
    return (
      <div className="mvv-container">
        <h2>Mission, Vision, and Values</h2>
        <form>
            <label htmlFor="missionStatement">Mission Statement</label>
            <p>Describe your company's overarching purpose.  Who is your company?</p>
            <input id="missionStatement" className="mvv-inputs" type="text" value={this.props.data.missionStatement} onChange={this.props.handleMVVChange} placeholder="Type your company mission statement here..." />
            <label htmlFor="vision">Vision</label>
            <p>What does your company seek to achieve?  Where do you see your company in 5-10 years?</p>
            <input id="vision" className="mvv-inputs" type="text" onChange={this.props.handleChange} placeholder="Type your vision here..."></input>
            <label htmlFor="values">Values</label>
            <p>What are the principles that guide your company?</p>
            <input id="values" className="mvv-inputs" type="text" onChange={this.props.handleChange} placeholder="Type your values here..."></input>
        </form>
        <div className="button-container">
        <Link to="/plan/create-comp-analysis"><button type="submit">Next</button></Link>
        </div>
        
      </div>
    )
  }
}
export default CreateMVV;
