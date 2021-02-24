import  React ,{useState}from "react";
import {Link} from "react-router-dom";
import Helloworld from "../api/HelloWorldApi";

export default function Welcome(){
 const [msg,setMsg]= useState("")
    function DisplayMsg(){
       Helloworld()
           .then(response => setMsg(response.data))
    }
    return(
        <div>
            <h1>Welcome to do application</h1><br/>
            <h2>Go to login page<Link to ="/login">here</Link></h2><br/>
            <button onClick={DisplayMsg}>Click Me</button>

        <div className="container">
            {msg}
        </div>
        </div>
    )
}
