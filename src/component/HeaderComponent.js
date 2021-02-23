import  React from "react";
import {Link} from "react-router-dom";
import Login from "./Login";

export default function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/"> Home </Link></li>
                        <li ><Link className="nav-link" to="/todo"> Todos </Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className="nav-link" to="/login"> Login</Link></li>
                        <li ><Link className="nav-link" to="/logout" > Logout </Link></li>
                    </ul>

            </nav>
        </header>

    )
}
