import React,{useContext} from 'react'
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { TaskContext } from '../utils/TaskContext';

const Item = ({id,name,completed}) => {

    const {tasks,setTasks} = useContext(TaskContext);

  const handleCancelTask = ()=>{

    const changeTasks = tasks.filter((task)=>task.id!==id);

    setTasks(changeTasks);
    localStorage.setItem("tasks",JSON.stringify(changeTasks));
  }

 

  const handleComplete = ()=>{
   
    const changeTasks = tasks.map((task)=>{

        if(task.id===id)
        {
            return {...task,"completed":!task.completed}
        }
        else{
            return task;
        }

    })

    setTasks(changeTasks);
    localStorage.setItem("tasks",JSON.stringify(changeTasks));
   
  }

  return (
    <div className={`flex justify-between border-2 rounded-lg ${completed?"border-[#BADDAE]":"border-[#EAEAEA]"}  p-4 py-3 mb-4 items-center font-semibold ${completed ?"bg-[#E8F3E2]":"bg-[#FAFAFA]"}`}>
        <div className='flex items-center gap-2'>
        <div onClick={handleComplete}>
        {completed?<FaCheckCircle />:<FaRegCircle />} 
        </div>
       
        <h2>{name}</h2>



        </div>
        <div>
        <div onClick={handleCancelTask}>
        <RxCross2 />
        </div>    
       

        </div>

    </div>
  )
}

export default Item