import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import taskService from './services/taskService';

const App: React.FC = () => {
  const [refreshTasks, setRefreshTasks] = useState(false);

  useEffect(() => {
    setRefreshTasks(false);
  }, [refreshTasks]);

  const handleTaskSubmit = async () => {
    const newTask = {
      id: 0,
      title: 'New Task',
      description: 'Task description',
      completed: false,
    };
    await taskService.createTask(newTask);
    setRefreshTasks(true);
  };

  return (
    <div className="container d-flex flex-column align-items-start justify-content-center vh-100">
      <h1 className="text-center">Task Management App</h1> <br/><br/>
      <div className="d-flex flex-column align-items-start">
        <div className="mb-3">
          <TaskForm onSubmit={handleTaskSubmit} />
        </div>
        <div>
          <TaskList key={refreshTasks.toString()} />
        </div>
      </div>
    </div>
  );
};

export default App;
