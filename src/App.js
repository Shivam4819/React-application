import logo from './logo.svg';
import './App.css';
import {HashRouter,Route} from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
function App() {
  return (
    <HashRouter>
      <div className="App">
      <Route exact path="/" component={Registration}/>
      <Route exact path="/login" component={Login}/>
    </div>
    </HashRouter>
  );
}

export default App;
