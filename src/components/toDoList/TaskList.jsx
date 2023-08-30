import React from 'react'
import TaskButtonWrapper from './TaskButtonWrapper'

const TaskList = () => {
  return (
    <div className='task-list'>
        <div className='task'>
            <input className='task-checkbox' type="checkbox" />
            <p>Lorem ipsum dolor sit amet.</p>
            <TaskButtonWrapper/>
        </div>
           
    </div>
  )
}

export default TaskList