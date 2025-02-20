import React from 'react'
import {useState,useEffect} from 'react';
import '../style/login.css'

const Login = () => {
  var[text,setText]=useState("");
    var[password,setPassword]=useState("");
    useEffect(()=>{
        {}
    },[])
  return (
    <div className='login'>
    <h1>Login</h1>
    <div id='style'>
     <h3>Enter Email Id</h3> <input type="email" value={text} onChange={(event)=>setText(event.target.value)} />
     <h3>Enter password </h3> <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />

    </div>
    </div>
  )
}

export default Login