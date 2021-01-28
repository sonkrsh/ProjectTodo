import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { db } from './FirebaseConfig'
import firebase from 'firebase'
import "./tasks.css";

function Tasks({ TaskName, Time, id, status }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editTaskName, seteditTaskName] = useState('')
    const [editTaskId, seteditTaskId] = useState('')

    const editHandleChange = (e) => {
        e.preventDefault()

        handleClose()
        var washingtonRef = db.collection("todos").doc(editTaskId);
        washingtonRef.update({
            status: "pending",
            task: editTaskName,
            time: firebase.firestore.FieldValue.serverTimestamp(),

        })
    }

    const handleDelte = (e) => {
        var washingtonRef = db.collection("todos").doc(e.target.value).delete();

    }

    const handleEdit = (e) => {
        handleShow()
        console.log(e.target.value)
        var currentRow = e.currentTarget.parentNode.parentNode.parentElement.parentElement.getElementsByTagName('h5')[0].innerHTML;
        seteditTaskName(currentRow)
        seteditTaskId(e.target.value)


    }
    return (
        <>
            <div className="container">
                <div className="row taskBox">
                    <div className="col-sm-6">
                        <div className="taskName">
                            <h5>{TaskName}</h5>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="buttnDate" key={id}>
                            <div className="btn_block">
                                <button
                                    onClick={handleEdit}
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    value={id}>
                                    Edit
                                </button>

                                <button type="button"
                                    onClick={handleDelte}
                                    value={id}
                                    className="btn btn-warning">
                                    Task completed
                                </button>
                            </div>
                            <div className="date">
                                <p>Status : {status}</p><p>{new Date(Time * 1000).toLocaleTimeString("en-US")}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <form onSubmit={editHandleChange}>
                    <Modal.Body>
                        <input
                            type="text"
                            onChange={e => { seteditTaskName(e.target.value) }} class="form-control"
                            value={editTaskName} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            type="submit"
                            value={editTaskId}
                            variant="primary">
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )

}

export default Tasks
