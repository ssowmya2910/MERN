import React from 'react'
import {memo,useState} from "react";

const Text = () => {
    var[text,setText]=useState("");
  return (
    <div><h2>
      This is Text Box</h2>
      <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <h3>The Number is </h3></div>
  )
}

export default memo(Text);