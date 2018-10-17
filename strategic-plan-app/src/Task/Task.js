import React, { Component } from 'react'
import './task.css'
//For selecting dates need:
//need npm install react-datepicker --save
//need statDate value in state
//need endDate value in state
//need handleChange function


class Task extends Component {
  render() {
    return (
      <div className='taskList'>
        <div className='addTask'> 
            <form className='form'>
                <label>Task</label>
                    <input type='text'/>
                <label>Start Date</label>
                    <input type='number'/>
                <label>End Date</label>
                    <input type='number'/>
                <label>Point Person</label>
                        <select>
                            <option selected value="me">me</option>
                            <option value="johndoe">John Doe</option>
                            <option value="judyrudy">Judy Rudy</option>
                        </select>
                <label>Progress</label>
                            <button>Not Yet Started</button>
                            <button>In Progress</button>
                            <button>Completed</button>
                    <input type="submit" value="Submit" />
            </form>
        </div>  
      </div>
    )
  }
}

  export default Task