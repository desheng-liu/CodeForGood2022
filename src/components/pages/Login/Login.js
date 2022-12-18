import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import FunkyFarmPeeps from '../../../constants/images/FunkyFarmPeepsPixelated.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useState} from "react";
import {auth } from "../../../firebaseauth";

console.log(FunkyFarmPeeps);

function LogIn() {
  const navigate = useNavigate();
  const [Loginemail, setLoginEmail] = useState(""); 
  const [Loginpass, setLoginPassword] = useState(""); 

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        Loginemail,
        Loginpass
      );
      
      navigate("/home");


      console.log(user);
    } catch (error) {
      console.log("Error");
      console.log(error.message);
    }
  };
    
    return (
      <div className = "container">
        <img className="logo" src={require('../../../constants/images/funkylogo.png')}/>
        <div className = "logIn">
          <h1>Log In</h1>
            <div className="inputDiv">
              <input className = "inputField" type="text" id="Name" name="Name" placeholder="User Name" 
              value={Loginemail}
              onChange={(e) => setLoginEmail(e.target.value)}/>
              <input className = "inputField" type="password" id="password" name="password" placeholder="Password"
              value={Loginpass}
              onChange={(e) => setLoginPassword(e.target.value)}/>
              <a onClick={login}>login</a>
              <a  onClick={() => navigate("/signup")}>new volunteer</a>
            </div>
        </div>
        <div className="image-container">
          <img className="image" src={require('../../../constants/images/FunkyFarmPeepsPixelated.png')} alt="yo"></img>
        </div>
      </div>
    );
  }
  
  export default LogIn;
