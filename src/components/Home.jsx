import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AddTask from './AddTask';
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid';

const Home = (props) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      )
      setTasks(data);
    }
    fetchTasks();
  }, [])
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    });
    console.log(newTasks)
    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }
  return (
    <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      {tasks && 
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> 
        
      }
    </>
  );
};

export default Home;
