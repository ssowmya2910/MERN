import React from 'react'
import "../style/Signup.css"
import{useState} from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // to link frontend signup to backend signup (5173->3001)


const Signup = () => {
  const navigate=useNavigate();
  var[firstName,setFN]=useState("");
  var[lastName,setLN]=useState("");
  var[email,setEmail]=useState("");
  var[password,setPassword]=useState("");
  var[phoneNumber,setPhoneNum]=useState("");

  const handleSignup=async(event)=>{
     event.preventDefault()
   const req=await axios.post("http://localhost:3001/signup",{
     firstName:firstName,
     lastName:lastName,
     email:email,
     password:password,
     phoneNumber:phoneNumber,
  })
  const message=req.data.message
  const isSignUp=req.data.isSignUp
  if(isSignUp){
    alert(message)
    navigate("/login")
  }
  else{
    alert(message)
  }
}
  return (
    <main>
  <div className='form'>
    <h1>Signup</h1>
    <div id='style'>
    <form onSubmit={handleSignup}>
     <h3>Enter FirstName </h3> <input type="text" value={firstName} onChange={(event)=>setFN(event.target.value)} />
     <h3>Enter lastName </h3> <input type="text" value={lastName} onChange={(event)=>setLN(event.target.value)} />
     <h3>Enter Email </h3> <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
     <h3>Enter password </h3> <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
     <h3>Enter phone Number </h3> <input type="number" value={phoneNumber} onChange={(event)=>setPhoneNum(event.target.value)} />

    
    <button type="submit" class="btn">submit</button>
    </form>
    </div>
      <div className="loginpg">
          
        <h4>Already Have an account? <Link to='/login'><button>login</button></Link></h4>
      </div>
    </div>
    </main>
  )
}

export default Signup
