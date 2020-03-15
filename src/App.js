import React from 'react';

import './App.css';


//components

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList/>
      <Buttons/>
    </div>
  );
}

export default App;
