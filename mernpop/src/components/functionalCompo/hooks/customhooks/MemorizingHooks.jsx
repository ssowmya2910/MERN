import { useState ,useEffect} from "react";
const useMemoize=(key,value)=>{
    var[text,setText]=useState(()=>{
        var jsonValue=localStorage.getItem(key)
        if(jsonValue!==null && jsonValue!== 'undefined'){
            return JSON.parse(jsonValue);
        }
        return value;
    })
    useEffect(()=>{
        console.log(key,text);
        localStorage.setItem(key,JSON.stringify(text))
    },[key,text])
    return [text,setText]

};
export default useMemoize;