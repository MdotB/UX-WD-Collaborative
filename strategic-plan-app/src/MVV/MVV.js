import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MVV.css';

class MVV extends Component {
  render() {
    return (
      <div>
        <form action="/plan/mvv">
            <label>Mission Statement</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <input type="text" placeholder="Type your company mission statement here."></input>
            <label>Vision</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <input type="text"></input>
            <label>Values</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <input type="text"></input>
        </form>
        <Link to="/plan/comparative-analysis"><button>NEXT</button></Link>
        
      </div>
    )
  }
}
export default MVV;
