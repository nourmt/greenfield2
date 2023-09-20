import React, { useState } from 'react';
import './Topheader.css'
import axios from "axios"
import { Link } from 'react-router-dom';



function TopHeader() {
 
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
  
  
    const Singup1= () =>{
      axios.post("http://localhost:5000/client/add",{
       name:name,
       email:email,
       password:password 
     }).then((response)=>{
      const token = response.data.message
     console.log(response.data)
       })
       .catch((error) => {
        console.error('Error:', error)
      })
     }
    

  return (
    <div className="sign-up">
  <div className="div">
    <div className="top-header">
      <div className="frame">
        <div className="frame-2">
          <p className="text-wrapper">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
         
        </div>
        <div className="frame-3">
          <div className="text-wrapper-3">English</div>
          <img className="img" src="img/drop-down.svg" alt="" />
        </div>
      </div>
   </div>
    <div className="header">
      <div className="frame-4">        
<div className="logo"><div className="text-wrapper-4">Exclusive</div></div>
        <div className="frame-5">
          <div  className="div-wrapper">
          <Link to="/">
            <div className="text-wrapper-5">Home</div>
            </Link>
            </div>
     
          
       
          <div className="div-wrapper"><div className="text-wrapper-5">About</div></div>
          <div className="header-3">
            <div className="text-wrapper-6">Sign Up</div>
            <div className="under-line"></div>
          </div>
        </div>
      </div>
      <div className="frame-6">
        <div className="search-component-set">
          <div className="frame-7">
            <p className="p">What are you looking for?</p>
     
          </div>
        </div>
      </div>
    </div>
    <div className="line"></div>


    <div className="frame-8">
      <div className="side-image"><img  src="https://i.pinimg.com/564x/31/ca/0c/31ca0c49f4be73a69de979cb48fd15b0.jpg" alt="" /></div>
      <div className="frame-9">
        <div className="frame-10">
          <div className="text-wrapper-7">Create an account</div>
          <div className="text-wrapper-8">Enter your details below</div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-13">
               <div className="text-wrapper-9">Name</div>
               <input type ="text" onChange ={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="frame-13">
              <div className="text-wrapper-9">Email or Phone Number</div>
              
              <input type ="text" onChange ={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="frame-13">
              <div className="text-wrapper-9">Password</div>
        
              <input type ="password"onChange ={(e)=>{setPassword(e.target.value)}} />
            </div>
          </div>
          <div className="frame-14">
        
                <button onClick={Singup1}><Link to="/Login">Singup</Link> </button>

            <div className="frame-15">
              <div className="google-sign-up">
                <div className="frame-16">
                  
                  <div onClick className="text-wrapper-10">Sign up with Google</div>
               
                </div>
              </div>
              <div className="frame-17">
                <div  className="text-wrapper-11">Already have account?</div>
               
                <div className="frame-18">
                  <div  onClick className="text-wrapper-12">Log in</div>
                  <div className="under-line-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  </div>
</div>

  )
}

export default TopHeader
