import React from 'react';
import Timer from "./timer/Timer";
import Todo from "./toDoList/Todo";

const Pomotask = () => {
  return (
    <div className="pomotask">
        <Timer />
        <Todo />
    </div>
  )
}

export default Pomotask