import  React from "react";

export default function ListComponent(){
    const arsr=[{ids:1,dis:'reatttt', done:false, targetdate: new Date()},
                {ids: 2, dis: 'json', done:false, targetdate: new Date()},
                {ids: 3, dis: 'addad', done:false, targetdate: new Date()}]
    return(
        <div>
          <h2>Record</h2>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Discription</th>
                            <th>Completion Status</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arsr.map(
                                arrs=>
                                    <tr>
                                        <td>{arrs.ids}</td>
                                        <td>{arrs.dis}</td>
                                        <td>{arrs.done.toString()}</td>
                                        <td>{arrs.targetdate.toDateString()}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
