import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import '../Topheader/TopHeader.jsx'
import '../About/About.jsx'
import About from '../About/About.jsx'


export default function Home(props) {
  return (
     
    <div
     className="home-container">
   <div>
   <About/>
   </div>
   
   </div>
     

  )
}
