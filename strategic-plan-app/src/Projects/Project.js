import React, { Component } from 'react'
import Task from "../Task/Task"
import Objective from "../Objective/Objective"

class Project extends Component {
  render() {
    return (
      <div className=''>
      <Objective />
      <Task />
      </div>
    )
  }
}

export default Project;
