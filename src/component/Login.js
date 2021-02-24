import React ,{useState, }from "react";
import {HashRouter, Route} from "react-router-dom";


export default function Login(props){

    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const [login , setlogin]=useState(false);
    const [reject, setReject]=useState(false);
    function checkCredential(){

        if (user==="s" && pass==="a"){


            sessionStorage.setItem(user,pass);
            props.history.push("/todo")

            console.log("matched");
            setlogin(true);
            setReject(false);
          }
        else {
            console.log("wrong credential");
            setReject(true);
            setlogin(false);
        }
    }

    function Msg1({text}){
        if(login){
        return(<h2>Login done</h2>)
        }
        return null
    }
    function Msg2({text}){
        if(reject){
            return(<h2>Invalid data</h2>)
        }
        return null
    }
        return(
            <div >
                <h1>Login</h1>
                <div className="container">
                UserName:<input type="text "name="username"   onChange={(event => setUser(event.target.value))}/>
                Password:<input type="password" name="password" onChange={(event => setPass(event.target.value))}/>
                <button  className="btn btn-success" onClick={checkCredential} >Login</button>

                {/*below is 3 ways to exute same thing*/}
                {login && <div ><h2>Logged In</h2></div>}
                {reject && <div className="alert alert-warning"><h2>Invalid </h2></div>}
             {/*   <Msg1 text={login}/>
                <Msg2 text={reject}/>
            */}
              {/*  {
                    login ? <><h2>Okay</h2></>:null

                    }
                    {
                    reject ?<><h2>wrong</h2></>:null
                     }*/}

                </div>
            </div>
        )

    }


