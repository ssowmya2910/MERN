import React from 'react'
import "../style/Signup.css"
import{useState,useEffect} from "react";
import { Link } from 'react-router-dom'



const Signup = () => {
  var[text,setText]=useState("");
  var[password,setPassword]=useState("");
  useEffect(()=>{
      {}
  },[])
  return (
    <main>
  <div className='form'>
    <h1>Signup</h1>
    <div id='style'>
     <h3>Enter Email Id</h3> <input type="email" value={text} onChange={(event)=>setText(event.target.value)} />
     <h3>Enter password </h3> <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />

    </div>
    
          
          <h4>Already Have an account? <Link to='/login'><button>login</button></Link></h4>
          
    </div>
    </main>
  )
}

export default Signup