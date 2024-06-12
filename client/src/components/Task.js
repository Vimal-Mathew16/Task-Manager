import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => toggleComplete(task.id)}>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
