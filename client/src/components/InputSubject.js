import React, { Fragment, useState } from "react";

const InputSubject = () => {

    const [subject, setSubject] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { subject };
            const response =  await fetch("http://localhost:6000/study", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";


        } catch (err) {
            console.error(err.message);
            console.log("Something wrong")
        }

    };
    return ( 
        <Fragment>
            <h1 className = "text-center mt-5">Study Subject List!  </h1>
            <form className = "d-flex mt-5" onSubmit = {onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                 />
                <button className = "btn btn-warning">Add</button>
            </form>
        </Fragment>
        
    )
}
export default InputSubject;