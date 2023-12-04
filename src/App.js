import { NavBar } from './Components/NavBar';
import { Content } from './Components/Content';
import { Task } from './Components/Task';
import './App.css';
import { useState } from "react"


function App() {
  const [item,setItem]=useState("")
  console.log(item)
  const addTask=(e)=>{
    const id= task.length ? task[task.length-1].id +1:1;
    const newItem={id,checked:false,e}
    const addItems=[...task,newItem]
    setTask(addItems)
  }
  const display=(e)=>{
      return(
       
       e.preventDefault(),
       console.log(item),
       addTask(item),
       setItem('')
      
      )}
  const getData=(e)=>{
      setItem(e.target.value)
  }

  const [task,setTask]=useState(
  [
    ])

    const checkFunction=(id)=>{
        const checkItem= task.map((e)=>e.id ===id? {...e,checked:!e.checked}:e)
        setTask(checkItem)
    }
    const deleteTask=(id)=>{
        const deleteItems=task.filter((e)=>e.id!==id)
        setTask(deleteItems)
    }
    
  return (
    <div className='App'>
     <h1>#todo</h1>
     <NavBar/>
     <Content
     item={item}
     display={display}
     getData={getData}/>
     <Task
     deleteTask={deleteTask}
     checkFunction={checkFunction}
     task={task}/>
    </div>
  );
}

export default App;
