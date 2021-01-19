import React, {useState} from 'react'

function FilterTasks({onChange}) {
    const [filterText, setfilterText] = useState('')

    const handleFilter=(e)=>{
        onChange(e.target.value)
        setfilterText(e.target.value)
    }
    return (
        <form>
            <input type="text" onChange={handleFilter} value={filterText} className="form-control" placeholder="Filter Tasks"/>
        </form>
    )
}

export default FilterTasks
