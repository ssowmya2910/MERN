import {memo,useState} from "react";
const Number = () => {
    var[num,setNum]=useState(0);
  return (
    <div><h2>This is Number Box</h2>
    <input type="number" value={num} onChange={e=>setNum((e.target.value))}/>
    <h3>The Number is {num}</h3></div>
  )
}

export default memo(Number);