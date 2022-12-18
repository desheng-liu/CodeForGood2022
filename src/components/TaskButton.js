//Import Necessary React and Popup Files
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Import CSS File
import "./TaskButton.css";

const TaskButton = (ButtonId) => (
    
    <Popup
      trigger={<button className="task"> Objective {ButtonId.taskId} </button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Task Name</h1>
          <br/>
          <br/>
          <br/>
          <div className="content">
            This is the task description!
          </div>
          <br/>
          <div>Link Here</div>
          <br/>
          <br/>
          <div className="actions">
          <button
              onClick={() => {
                <button disabled={true}>Click</button>
                close();
              }}
            >
              Accept Task
            </button>
            <button
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              Decline Task
            </button>
          </div>
        </div>
      )}
    </Popup>
  );

  export default TaskButton;