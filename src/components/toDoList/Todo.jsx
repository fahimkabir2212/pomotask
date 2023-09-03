import React, {useState} from 'react'
import TaskInputForm from './TaskInputForm'
import {v4 as uuidv4} from 'uuid'
import TaskList from './TaskList';
import EditTodoFrom from './EditTodoForm';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = function(todo) {
    setTodos([...todos, {id:uuidv4(), task:todo, completed: false, isEditing: false}]);
    console.log(todos)
  }

  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed}:todo));
  }

  const deleteTask = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTask = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo));
  }

  const editTodo = (task, id) => {
    setTodos(todos.map(todo=> todo.id === id ?{...todo, task, isEditing: !todo.isEditing}:todo));
  }
  

  return (
    <div className='todo'>
       <TaskInputForm addTodo = {addTodo}/>
       {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoFrom editTask={editTodo} task={todo}/>
        ) : (
          <TaskList task = {todo} key={index} toggleComplete = {toggleComplete} deleteTask ={deleteTask} editTask = {editTask}/>
        )

       ) )}
       
    </div>
  )
}

export default Todo;