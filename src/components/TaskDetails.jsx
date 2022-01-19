import React, { useState } from 'react';
  import { Link, useParams } from "react-router-dom";


import './TaskDetails.css'


const TaskDetails = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);
  const params = useParams();

  
  const task = tasks.filter(task => task.id === params.taskId);
  


  console.log(task)
  return (
    <>
      <div className="back-button-container">      
          <Link 
          className="back-task-button"
          to={`/`}>Voltar
          </Link>
        <div className="task-details-container">
          <h2>{task && task[0]?.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facere at ut voluptates, quae aut!</p>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;