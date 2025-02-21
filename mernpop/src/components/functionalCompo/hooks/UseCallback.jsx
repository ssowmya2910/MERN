import React from 'react'
import { useState,useCallback } from 'react'
const UseCallback = () => {
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor:theme?"palevioletred":"white",
        color:theme? "white":"palevioletred",
    }
    var numList= (mul)=>{
        return [parseInt(number)+mul*2,parseInt(number)+mul*4,parseInt(number)+mul*8];
    }
  return (
    <>
    <button onClick={()=>setTheme(!theme)}>Toggle </button>
    <div style={styling}><h1>This is Example of UseCallback</h1>
    Numberbox:{""}
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <h2>The number is{number}</h2>   
    <h2> the num list is <ol>
        {numList(5).map((val,index)=>(
            <h2 key={index}>{val}</h2>
        ))}
        </ol></h2>
    </div>
    </>

  )
}

export default UseCallback