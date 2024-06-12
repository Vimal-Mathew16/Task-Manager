import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    addTask({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
