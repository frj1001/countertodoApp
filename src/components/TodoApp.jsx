import React from 'react'
import { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState("")
  const [list, setlist] = useState([])

  const handleClick = ()=>{
    setlist(list.concat(task))
    setTask("")
    console.log(list)}
  
  let Edit = (ind)=> {
    let update = prompt("Enter a new value")
    let new_list = [...list]
    new_list[ind] = update
    setlist(new_list)
  }

  let Delete = (ind)=> {
    let dup_list = [...list]
    dup_list.splice(ind,1)
    setlist(dup_list)
  }
  
  return (
    <div className='todo'>
      <h1>Todo App</h1>
      <input type="text" placeholder='Enter Task here' value={task} onChange={(e)=> setTask(e.target.value)} />
      <button className='two' onClick={handleClick}>Add Task</button>
      <ul><h2>Your List of Tasks</h2>
      {list.map((item,index)=>{
        return <li key={index}>{item} <span><button className='three' onClick={()=>Edit(index)}>Edit</button>
        <button className='four' onClick={()=> Delete(index)}>Delete</button></span> </li>  
      })}
      </ul>
    </div>
  )
}

export default TodoApp
