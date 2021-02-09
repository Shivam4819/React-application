import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import SecondCounter from "./component/secondCounter";

function App() {

  const [res,setRes] = useState(0)
  console.log("Res:",res)
  return (
    <div className="App">
      <SecondCounter text={10} setRes={setRes} res={res}/>
      <SecondCounter text={20} setRes={setRes} res={res}/><br/>

      <span className="count"> RES:{res} </span><br/>
      <button onClick={()=>setRes(0)}>reset</button>

    </div>
  );
}

export default App;
