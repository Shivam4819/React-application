import React ,{useState}from "react";

export default function TodoApp(){

    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    function LoginComponent(){

        function changeUser(user){
            return(
                setUser(user)
            )
        }
        return(
            <div >
                UserName:<input type="text "name="username"   onChange={event => setUser(event.target.value)}/>
                Password:<input type="password" name="password" onChange={event => setPass(event.target.value)}/>
                <button>Login</button>
            </div>
        )
    }
    return(
        <div className="TodoApp">
          my todos
            <LoginComponent/>
        </div>
    )
}
