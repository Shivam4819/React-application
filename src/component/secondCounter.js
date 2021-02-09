import React ,{useState }from "react";
import './counter.css'


export default function SecondCounter({text, res, setRes}){
    //console.log("props:",text)
    function addValue(text){
        setRes(res+text)
        //console.log(val)
    }

    return(

        <div className="SecondCounter">
            <button onClick={()=>addValue(text)}>+{text}</button>


        </div>


    )


}


