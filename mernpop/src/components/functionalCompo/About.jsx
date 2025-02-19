import { useState } from "react";
function About(){
  var InitialVal = 0;
  var[num,setNum] = useState(InitialVal);
  var InString='';
  var[str,setStr]=useState(InString);
  function handleDecrement(){
     setNum(num-1);
  }
  function addString(){
    setStr(str+"")
  }
  return (
    <div>
    <h1>About</h1>
    <h2> State intial value is {InitialVal}</h2>
    <button onClick={handleDecrement}>-</button>
    <h3>Updating:{num}</h3>
    <button onClick={() => setNum(num+1)}>+</button>
    <h3>Get Input</h3>
    <button onChange={()=>setStr(str+"")}><input type="button" value=""> </input></button>
    </div>
  );
} 

export default About;
