import React ,{useState} from 'react'
import axios from "axios"
import '../Topheader/TopHeader.jsx'
import './Singup.css'
import { Link} from 'react-router-dom'
import TopHeader from '../Topheader/TopHeader.jsx'


const Singup =()=> {
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
  
  
     
  
    return (
      <div>
        <TopHeader/>
  


</div>


    )
  
  }


export default Singup


