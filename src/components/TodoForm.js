import React, { useState } from 'react'
import { db } from './FirebaseConfig'
import firebase from 'firebase'
import TodoTaskList from './TodoTaskList'

function TodoForm({ onSubmit }) {

    const [inputValue, setinputValue] = useState('')


    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (inputValue && inputValue.trim() != '') {
            db.collection("todos").add({
                task: inputValue,
                time: firebase.firestore.FieldValue.serverTimestamp(),
                status: "pending"
            })
            onSubmit(inputValue)
            setinputValue('')
        }
        else {
            onSubmit(inputValue)
        }

    }
    const ValueChangeHandler = (e) => {
        setinputValue(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="input-group mb-3">
                    <input type="text"
                    className="form-control"
                    value={inputValue} 
                    onChange={ValueChangeHandler} 
                    placeholder="Enter Task Name" 
                    />

                    <div className="input-group-append">
                        <button 
                        className="btn btn-success" 
                        type="submit">
                        Add Task
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default TodoForm
