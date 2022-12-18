import React from 'react';
import Navbar from './components';
import './App.css';
import {Home, Login, Tasks, SignUp} from './components'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
    </div>
  );
}

export default App;
