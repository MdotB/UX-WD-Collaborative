import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MVV from '../MVV/MVV';
import './Plan.css';

class Plan extends Component {
  render() {
    return (
      <div>
        <Route path="/plan/mvv" render={() => <MVV/>}/>
      </div>
    )
  }
}

export default Plan;
