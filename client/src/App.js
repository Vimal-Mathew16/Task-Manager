import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
