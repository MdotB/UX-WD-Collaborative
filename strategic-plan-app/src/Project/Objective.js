import React, { Component } from 'react'

class Objective extends Component {
  render() {
    return (
      <div className='Objective '>
        <h2>{this.state.objective.task}</h2>
        
      </div>
    )
  }
}

  export default Objective