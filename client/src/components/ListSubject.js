import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"

import EditSubject from "./EditSubject";

const ListSubject = () => {

  const [sub, setSubject] = useState([]);

  const deleteSubject = async (id) => {
    try {
      const deleteSubject = await fetch(`http://localhost:6000/studies/${id}`, {
        method: "DELETE"
      });
      setSubject(sub.filter(stud =>
        stud.studylist_id !== id))
    } catch (err) {
      console.error(err.message);
    }
  }

  const getSubject = async () => {
    
    // const response = fetch("/api/studies").then(response => {
    //   console.log(response);
    // })
    try {

            // const res = await axios.get("http://localhost:6000/studies")
            // console.log(res)
      const response = await fetch("/api/studies")
      const jsonData = await response.json();

      setSubject(jsonData);
      
      } catch (err) {
        console.error(err.message);
        }
    }

    useEffect(() => {
      getSubject();
    }, []);
  
   
    return (
        <Fragment>
            <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {sub.map(stud => (
        <tr key = {stud.studylist_id}>
          <td>{stud.subject}</td>
          <td>
            <EditSubject stud={stud}/>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteSubject(stud.studylist_id)}>
              Delete</button>
          </td> 
        </tr>
        
      ))}
      
    </tbody>
    </table>
        </Fragment>
    )
}

export default ListSubject;