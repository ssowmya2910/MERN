import React from 'react'
import { useState,useMemo } from 'react'
function slowFunction(num){
   for(var i=0;i<1000;i++){}
   return num*2;
}
const UseMemo = () => {
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor:theme?"red":"green",
        color:theme? "green":"red",
    }
    var doublingUpaNumber=useMemo(()=>{
        return slowFunction(number)
    },[number])
  return (
    <>
    <button onClick={()=>setTheme(!theme)}>Toggle </button>
    <div style={styling}><h1>This is Example of UseMemo</h1>
    Numberbox:{""}
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <h2>The number is{number}</h2>   
    <h2> the num is {doublingUpaNumber} </h2>
    </div>
    </>

  )
}

export default UseMemo