import React, { useEffect, useState } from 'react'
import { db } from './FirebaseConfig'
import firebase from 'firebase'
import './todoTaskList.css'
import Tasks from './Tasks'

function TodoTaskList({ data, filterData }) {


    const [tasks, settasks] = useState([])

    useEffect(() => {
        db.collection("todos").orderBy("time", "desc").onSnapshot(function (data) {
            settasks(
                data.docs.map((value) => ({
                    id: value.id,
                    tasks: value.data().task,
                    time: value.data().time,
                    status: value.data().status,
                }))
            )

        })
    }, [data])
    return (
        <div>
            <div className="form-group">
            </div>
            <div className="allTask">
                {tasks.filter(name => (name.tasks).includes(filterData)).map((value, key) =>
                (
                    <Tasks TaskName={value.tasks} status={value.status} id={value.id} Time={value.time} key={key} />
                )
                )}

            </div>
        </div>
    )
}

export default TodoTaskList
