import React ,{useState}from "react";
import './counter.css'


export default function  Counter(){
    const [val,setVal]= useState(0)

    function addValue(value){
        setVal(val+value);
        console.log(value)
    }

    return(
        <div className="counter">
            <button onClick={()=>addValue(1)}>+1</button>
            <button onClick={()=> addValue(10)}>+10</button><br/>
            <button onClick={()=>addValue(100)}>+100</button>
            <button onClick={()=>addValue(1000)}>+1000</button><br/>
            <span className="count">Val:{val}</span>
        </div>
    )


}


