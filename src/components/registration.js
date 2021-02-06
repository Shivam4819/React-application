import React ,{useState, useEffect}from "react"
import {Link} from "react-router-dom"


export default function Registration(){

    const [postId,SetPostId]= useState(null)
    const [data,Setdata]=useState([])
    const [status,setStatus]=useState(true)
    const getData= async ()=>{
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };

        const response = await fetch('http://localhost:8080/JasonServlet/DisplayDataApi', requestOptions);
        const json = await response.json()
        console.log("Response:",json)
        Setdata(json)


    }

   /* useEffect(() => {
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

        fetch('http://localhost:8080/JasonServlet/DisplayDataApi', requestOptions)
            .then((response) => {
                response.json().then(data=>{
                    console.log("Data:",data.instructorname)
                   // SetPostId(data)
                }).catch(e=>{
                    console.log(e)
                })

            })

    }, []);*/


    return(
        <div className="regis">
            <h4>Wellcome reg</h4>
            <Link to = "/login">login</Link>
            <div>
                Returned id:{postId}
                <button onClick={getData}>Get data</button>
            </div>

            {
                data.length>0?
                    <>
                    <ul>
                        {data.map(value => {
                            return <li> id:{value.id}<br/>
                                        email:{value.email}<br/>
                                        coursename:{value.course}<br/>
                                        instructor:{value.instructorname}<br/>
                                    </li>
                        })}
                    </ul>
                    </>
                    :
                    <>
                    <h2>no data</h2>
                    </>
            }

        </div>
    )
}

