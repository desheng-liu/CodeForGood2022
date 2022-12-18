import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseauth";
function SignUp() {
  const [name, setName] = useState(""); //stores the name of the new user
  const [email, setEmail] = useState(""); //stores the email of the new user
  const [pass, setPassword] = useState(""); //stores the password of the new user
  
  const navigate = useNavigate();
  const register = async () => {
    
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log("Error");
      console.log(error.message);
    }
  };

  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <div className="inputDiv">
        <input
          className="inputField"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputField"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputField"
          type="password"
          id="password"
          name="pass"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="inputField"
          type="password"
          id="confirm-pass"
          name="confirm"
          placeholder="Confirm Password"
        />
        <a type="submit" onClick={register}>
          submit
        </a>{" "}
        {/*when you click the button, you sign up and are authenticated*/}
      </div>
    </div>
  );
}

export default SignUp;
// import React, {useState} from 'react'
// import "./SignUp.css";

// function SignUp() {

//     const [name, setName] = useState('');   //stores the name of the new user
//     const [email, setEmail] = useState(''); //stores the email of the new user
//     const [pass, setPassword] = useState(''); //stores the password of the new user

//     const storename = () => {
//       console.log('value is:', name);
//       console.log('value is:', email);
//       console.log('value is:', pass);
//     }

//     return (
//       <div className = "signUp">
//         <h1>Sign Up</h1>
//           <div className="inputDiv">
//             <input className = "inputField" type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) }/>
//             <input className = "inputField" type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) }/>
//             <input className = "inputField" type="text" id="password" name="pass" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value) }/>
//             <input className = "inputField" type="text" id="confirm-pass" name="confirm" placeholder="Confirm Password" />
//             <button type="submit" onClick={storename}>Submit</button> {/*when you click the button, you sign up and are authenticated*/}
//           </div>
//         </div>
//     );
//   }

//   export default SignUp;
