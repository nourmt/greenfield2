import React,{useState} from 'react'

import { BrowserRouter as Router, Route ,Routes,Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Add from './components/Add/Add'
import Singup from './components/Singup/Singup'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Update from './components/Update/Update'




function App() {

  return (
    <Router>
    
<Routes>
<Route path="/" element={ <Home/>} />
<Route path="/Signup" element={<Singup/>} />
<Route path="/Login" element={<Login/>} />
<Route path="/Products" element={<> <Navbar/> <Products/></>} />
<Route path="/Add" element={<><Navbar/><Add/></>} />
<Route path="/Update" element={<><Navbar/><Update/></>} />
</Routes>

    </Router>
   
  );
}

export default App;
