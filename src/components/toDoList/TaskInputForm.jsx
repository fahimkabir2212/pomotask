import React, {useState} from 'react'

const TaskInputForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue('');
        
    }
    const handleChange = function (e) {
        setValue(e.target.value);
    }
  return (
        <form onSubmit={handleSubmit} className='task-form'>
          <input type="text" placeholder='tasks' className='task-input-fld' value={value} onChange={handleChange} required/>
          <button type='submit' className='add-task-btn'>+</button>
       </form>
  )
}

export default TaskInputForm;