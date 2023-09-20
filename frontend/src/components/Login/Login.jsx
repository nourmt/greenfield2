import React ,{useState}from 'react'
import axios from "axios"
import { Link,useNavigate } from 'react-router-dom';

import './Login.css'



function Login() {
  const [email,setEmail]=useState("null")
  const [password,setPassword]=useState("null")
  const navigate = useNavigate()


  const login1= () =>{
    axios.post("http://localhost:5000/client/login",{
    email:email,
    password:password 
   }).then((response)=>{
    
     const token = response.data.token
   console.log('Received token:', token)
   if (response.data.message) {
  navigate ('/Products')
  }
})
   
     .catch((error) => {
      console.error('Error:', error)
    })
   }

  return (
    <div className="login">
      
    <h1>login</h1>
    <label>email</label>
      <input  className = 'InpLogin'type ="text" onChange ={(e)=>{setEmail(e.target.value)}}/>
      <label>password </label>
      <input className = ''type ="password" onChange ={(e)=>{setPassword(e.target.value)}}/>
     


        <div>
          <button onClick={login1}>Login</button>
        </div>
    
    </div>
  )
}

export default Login