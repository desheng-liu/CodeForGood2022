import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../../components'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar/>
      <div className="welcome">
        <h1>Welcome</h1>
        <img className="rank" src={require('../../../constants/images/Sappling.png')} alt="seedling"/>
        <h1>Sprout!</h1>
        </div>
        <div className="bottom-info">
          <div className="pointDiv">
            <h2>Points</h2>
            <div className="align">
              <span> 5 </span>
            </div>
          </div>
          <div className="hourDiv">
            <h2>Total Hours</h2>
            <div className="align">
              <span> 50 </span>
            </div>
            
          </div>
        </div>
        <div className="checkin">
          <a onClick={() => navigate('/tasks')}>check-in</a>
        </div>
    </div>
  )
}

export default Home;