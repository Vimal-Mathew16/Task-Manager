import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
