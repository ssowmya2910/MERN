import React from 'react'
import { useState } from 'react';

const UseState = () => {
    var InitialVal = 0;
      var[num,setNum] = useState(InitialVal);
      function handleDecrement(){
         setNum(num-1);
      }
  return (
    <div><h1>UseState</h1>
    <h2> State intial value is {InitialVal}</h2>
    <button onClick={handleDecrement}>-</button>
    <h3>Updating:{num}</h3>
    <button onClick={() => setNum(num+1)}>+</button>
    <h3>Get Input</h3>
    </div>
  )
}

export default UseState