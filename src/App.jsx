import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom'


import './App.css';
import TaskDetails from './components/TaskDetails'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route
          path={"/"}
          exact
          component={Home}
        />
        <Route path="/:taskId"
          exact
          component={TaskDetails}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;