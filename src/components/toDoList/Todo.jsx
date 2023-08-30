import React, {useState} from 'react'
import TaskInputForm from './TaskInputForm'
import {v4 as uuidv4} from 'uuid'
import TaskList from './TaskList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = function(todo) {
    setTodos([...todos, {id:uuidv4(), task:todo, completed: false, isEditing: false}]);
    console.log(todos)
  }
  return (
    <div className='todo'>
       <TaskInputForm addTodo = {addTodo}/>
       <TaskList/>
       
    </div>
  )
}

export default Todo;