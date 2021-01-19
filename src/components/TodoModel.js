import React, {useState} from 'react'
import FilterTasks from './FilterTasks'
import TodoForm from './TodoForm'
import TodoTaskList from './TodoTaskList'
import './todoModel.css'


function TodoModel() {
    const [listFetch, setlistFetch] = useState('')
    const [filtertext, setfiltertext] = useState('')


    const formData=(data)=>{
        setlistFetch(data)
    }
    const filterData=(data)=>{
        setfiltertext(data)
    }
    return (
        <div className="row">
            <div className="container"> 
            <h3 style={{textAlign:'center'}}>Day -To- Task</h3>
            <div className="row">
                <div className="col-sm-8">
                <TodoForm onSubmit={formData}/>
                </div>
                <div className="col-sm-4">
                <FilterTasks onChange={filterData}/>
                </div>
           
            </div>
           
            <TodoTaskList data={listFetch} filterData={filtertext}/>
            </div>
            
        </div>
    )
}

export default TodoModel
