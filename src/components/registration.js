import React ,{useState, useEffect}from "react"
import {Link} from "react-router-dom"


export default function Registration(){

    const [postId,SetPostId]= useState(null)

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*' ,
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://localhost:8080/ReactServer/react', requestOptions)
            .then(response => response.json())
            .then(data => SetPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return(
        <div className="regis">
            <h4>Wellcome reg</h4>
            <Link to = "/login">login</Link>
            <div>
                Returned id:{postId}
            </div>

        </div>
    )
}

