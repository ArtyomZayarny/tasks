import React, { useState } from 'react';
import './App.css';
import TaskList from './component/TaskList/TaskList'
import TasksProvider from './component/Providers/TasksProvider'
import Button from './component/ui/buttons/button'
import Form from './component/Form';

export default function App() {

  const [showForm, setShowForm] = useState(false)
  return (
    <div className="App">
      <h2>Your tasksList</h2>
      <TasksProvider>
        {
          (tasks) => { return <TaskList tasks={tasks} /> }
        }
      </TasksProvider>
      {showForm && <Form />}
      <Button showForm={setShowForm}>Add new task</Button>
    </div>
  );
}
