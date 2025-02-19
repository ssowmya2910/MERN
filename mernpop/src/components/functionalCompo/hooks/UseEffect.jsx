import {useState,useEffect} from "react";
const UseEffect=() => {
  var[text,setText]=useState("");
  var[text1,setText1]=useState("");
  useEffect(()=>{
    console.log(text); 
  },[text])
  useEffect(()=>{
    console.log(text1);
   
  },[text1])
  return (
    <div>
    <section>
        <h1>useEffect Example</h1>
        type your text:{""}
        <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
        <h2>typed text is {text}</h2>
    </section>
     <section>
        <h1>useEffect Example</h1>
        type your text:{""}
        <input type="text" value={text1} onChange={(event)=>setText1(event.target.value)}/>
        <h2>typed text is {text1}</h2>
    </section>
    </div>
  )
}
export default UseEffect