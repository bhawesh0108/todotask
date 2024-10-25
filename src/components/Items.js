import React,{useContext} from 'react'
import Item from './Item'
import { TaskContext } from '../utils/TaskContext';


const Items = () => {

    const {tasks,taskType} = useContext(TaskContext)
    let allTasks=[];

    if(taskType==="All")
    {
       allTasks = tasks;
    }
    else if(taskType==="Completed")
    {
         allTasks = tasks.filter((task)=>task.completed)
    }
    else{
        allTasks = tasks.filter((task)=>!task.completed)
    }

  return (
    <div className='mt-6 p-2 sm:mt-8 sm:px-12 sm:py-2 w-[100%]  flex-col gap-4'>
       
       {allTasks.map((task)=>{
        return <Item id={task.id} name={task.name} completed={task.completed}/>
       })}  
    </div>

  )
}

export default Items