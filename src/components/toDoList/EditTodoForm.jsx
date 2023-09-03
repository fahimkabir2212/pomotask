import React, {useState} from 'react'

const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id);
        setValue('');
        
    }
    const handleChange = function (e) {
        setValue(e.target.value);
    }
  return (
        <form onSubmit={handleSubmit} className='task-form'>
          <input type="text" placeholder='Update tasks' className='task-input-fld' value={value} onChange={handleChange}/>
          <button type='submit' className='add-task-btn'>~</button>
       </form>
  )
}

export default EditTodoForm;