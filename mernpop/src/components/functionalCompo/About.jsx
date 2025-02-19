import { useState } from "react"
function About(){
  var stateVar=0
  var[num,changeNum]= useState(stateVar);
  function handleDec(){
     changeNum(num-1);
  }
  return (
    <div>
    <h1>About</h1>
    <h2> State intial value is {stateVar}</h2>
    <button onClick={handleDec}>-</button>
    <h3>Updating:{num}</h3>
    <button onclick={()=>changeNum(num+1)}>+ </button>
      {}
    </div>
  )
};

export default About
