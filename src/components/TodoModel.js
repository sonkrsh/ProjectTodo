import React, {useState , useEffect} from 'react'
import FilterTasks from './FilterTasks'
import TodoForm from './TodoForm'
import TodoTaskList from './TodoTaskList'
import './todoModel.css'


function TodoModel() {

    useEffect(() => {
        var x ='sorav umar umar sigh ourav kumr sngh souv kumar singh sourav k'
       // Array.from(new Set(x.split(' '))).toString()
        var x ='sorav umar umar sigh ourav kumr sngh souv kumar singh sourav k'
        var arry_Value = x.split(" ")
        var resource = [];
      for(var i =0 ;i<arry_Value.length ;i++){
          
          if(arry_Value[i]===arry_Value[i+1]){
            console.log('congo')
          }
          else{
              resource.push(arry_Value[i])
             //console.log(arry_Value[i])
          }
        }
        console.log(resource)
        
    }, [])








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
