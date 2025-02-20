import React from 'react'
import { useState ,useEffect,useRef} from 'react';


const UseRef = () => {
    var[text,setText]=useState("");
    var previousRender=useRef();
    useEffect(()=>{
        previousRender.current=text;
        console.log(previousRender.current)
    })
  return (
    <div><h1>UseRef Example</h1>
    Enter Text:{""}
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <h2>The current render is {text}</h2>
    <h3> previous render is {previousRender.current}</h3>

    </div>
  )
}

export default UseRef