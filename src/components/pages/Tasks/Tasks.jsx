import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TaskButton from '../../TaskButton';
import { Navbar } from '../../../components'

import "./Tasks.css";

const Tasks = () => {
  return (
    <>
      <div className="tasks">
      <Navbar/>
        <h1>Pick A Task</h1>
        <div className="buttonsDiv">
            <TaskButton className="button-task1" taskId={1} />
            <TaskButton className="button-task2" taskId={2} />
            <TaskButton className="button-task3" taskId={3} />
        </div>
      </div>
    </>
  )
}

export default Tasks;