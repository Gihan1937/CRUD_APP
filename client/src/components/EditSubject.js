import React, { Fragment, useState } from "react"

const EditSubject = (stud) => {

    const [subject, setsubject] = useState(stud.subject)
    const updateSubject = async e => {
        e.preventDefault();
        try {
            const body = { subject };
            const response = await fetch('http://localhost:6000/studies/${stud.studylist_id}', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.locationn = "/"; 
        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target= {`#id${stud.studylist_id}`}>
                Edit
            </button>


            <div class="modal" id={`id${stud.studylist_id}`}
                onCLick={() => setsubject(stud.subject)}>
                <div class="modal-dialog">
                    <div class="modal-content">

    
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Subject</h4>
                            <button type="button" class="close" data-dismiss="modal"
                                onCLick={() =>setsubject(stud.subject)}>
                                &times;</button>
                        </div>

      
                        <div class="modal-body">
                            <input type="text" className="form-control" value={subject}
                                onChange={ e => setsubject(e.target.value)}/>
                        </div>

      
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal"
                                onClick = {e => updateSubject(e)}>
                                Edit</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                onCLick={() => setsubject(stud.subject)}>
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditSubject