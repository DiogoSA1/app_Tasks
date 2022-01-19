import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

import './TaskDetails.css'


const TaskDetails = () => {
  const params = useParams();

  const [task, setTask] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    let dataTask;
    if(params && params.taskId) {
      console.log(params)
      const fetchTasks = async () => {
        const { data } = await axios.get(
          "https://jsonplaceholder.cypress.io/todos?_limit=10"
        )
        setTasks(data);
        dataTask = tasks.filter(task => task.id === parseInt(params?.taskId))[0];
        setTask(dataTask);
        console.log(dataTask)
      }
      return fetchTasks();
    } 
    
  }, [params])

  return (
    <>
      <div className="back-button-container">
        <Link
          className="back-task-button"
          to={`/`}>Voltar
        </Link>
        <div className="task-details-container">
          <h2>{task && task?.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facere at ut voluptates, quae aut!</p>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;