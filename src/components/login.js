import React ,{useState}from "react"

export default function Login(){
    const [username,setUsername]= useState("");
    const [password,setPassword]=useState("");
    const [total,setTotal]= useState(0);
    function checkCredential(){
            if (username==="shivam" && password==="admin"){
                console.log("matched");
            }
            else {
                console.log("wrong credential");

            }
    }
    return(
        <div className="print">
          UserName: <input type= "text"  onChange={(event => setUsername(event.target.value))}/><br/>
          Password: <input type= "text"  onChange={(event => setPassword(event.target.value))}/>
          <h4>{username}</h4>
          <h4>{password}</h4>
            <button onClick={checkCredential}>login</button>

        </div>
    )
}

