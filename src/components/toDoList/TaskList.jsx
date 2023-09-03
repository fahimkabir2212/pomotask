import React from 'react'
import TaskButton from './TaskButton'

const TaskList = ({task, toggleComplete, deleteTask, editTask}) => {


  return (

        <div className='task'>
            <input onChange={()=> toggleComplete(task.id)} className='task-checkbox' type="checkbox" />
            <p  className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div className='task-update-btns'>
                <TaskButton btnOnClick = {()=> editTask(task.id)} buttonTaskName="Edit"/>
                <TaskButton btnOnClick = {()=> deleteTask(task.id)} buttonTaskName="Delete"/>
            </div>
        </div>
  )
}

export default TaskList