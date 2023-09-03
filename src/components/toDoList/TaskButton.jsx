import React from 'react'

const TaskButton = (props) => {
    const buttonTask = props.buttonTaskName;

  return (

        <button onClick={props.btnOnClick} className='btn-task'>{buttonTask}</button>

  )
}

export default TaskButton