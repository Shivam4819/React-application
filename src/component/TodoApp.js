import React ,{useState}from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";
import ListComponent from "./ListComponent";
import Error from "./ErrorPage";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Logout from "./Logout";
import Welcome from "./Welcome";
export default function TodoApp(){

    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    return(
        <div className="TodoApp">
            <HashRouter>

                <Header/>
                <Switch>
                     <Route exact path="/" component={Welcome}/>
                    <Route exact path="/welcome" component={Welcome}/>
                     <Route exact path="/login" component={Login}/>
                     <Route exact path="/todo" component={ListComponent}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route  component={Error}/>

                </Switch>
                <Footer/>
            </HashRouter>

        </div>
    )
}
