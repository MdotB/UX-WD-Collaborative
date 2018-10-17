//For selecting dates need:
//need npm install react-datepicker --save
//need statDate value in state
//need endDate value in state
//need handleChange function

import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div className='taskList'>
        <div className='addTask'> 
            <form>
                <label>Task</label>
                    <input type='text'/>
                <label>Start Date</label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                <label>End Date</label>
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
                <label>Point Person</label>
                        <select>
                            <option selected value="me">me</option>
                            <option value="johndoe">John Doe</option>
                            <option value="judyrudy">Judy Rudy</option>
                        </select>
                <label>Progress</label>
                        <select>
                            <option selected value="notstarted">Not Started</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                <label>Submit</label>
                    <input type="submit" value="Submit" />
            </form>
        </div>  
      </div>
    )
  }
}

  export default Task