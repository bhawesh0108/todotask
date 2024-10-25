import React,{useState,useContext, useEffect} from 'react'
import { TaskContext } from '../utils/TaskContext';
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";


const Header = () => {

    const {tasks,taskType,setTaskType} = useContext(TaskContext);
    const [search,setSearch] = useState("");
    const [searchedTasks,setSearchedTasks] = useState([]);
  
    function expensiveTask(){
        if(search){
            setSearchedTasks(tasks.filter((task)=>task.name.toLowerCase().includes(search.toLowerCase())))
        }

    }


    const handleChange = (e)=>{

        setSearch(e.target.value);
        expensiveTask();

    }


   const handleAllTasksFilter = () => {
    setTaskType("All")

   }

   const handleCompletedTasksFilter = () => {    
      setTaskType("Completed")    
   }

   const handleIncompletedTasksFilter = () => {
    setTaskType("Incomplete")   
 }

  return (
    <div className='p-2 flex flex-col gap-2 sm:flex sm:flex-row sm:justify-between sm:px-12 sm:py-2 sm:w-[100%]'>
        <div className='w-[100%] text-left sm:w-[10%]'>
            <h1 className='font-bold text-3xl'>Today</h1>
        </div>
        <div className='relative mb-2 w-[100%] sm:w-[55%] sm:relative'>
            <input value={search} onChange={handleChange} className='w-[100%] border border-slate-200 py-2 px-4 rounded-full sm:w-[80%]' type="text" placeholder='Search'/>
            {search?<div className="bg-gray-100 flex flex-col w-[100%] sm:w-[80%] rounded-md border-2 border-slate-100 py-2 h-auto sm:mx-12 absolute z-100">
        
           {searchedTasks.map((task)=>{
             return(<div className= 'border-2 border-b-slate px-2 py-4 flex items-center gap-2 pb-3'>
        <div>
        {task.completed?<FaCheckCircle />:<FaRegCircle />} 
        </div>
       
        <h2>{task.name}</h2>



        </div>)
            
           })}
   


</div>:null}

        </div>
        <div className='flex gap-2 w-[35%]'>
            <button onClick={handleAllTasksFilter} className={`border ${taskType==='All'?"bg-[#54AC34]":"bg-[#ABABAB]"}  px-4 py-1 text-white`}>All</button>
            <button onClick={handleCompletedTasksFilter} className={`border ${taskType==='Completed'?"bg-[#54AC34]":"bg-[#ABABAB]"} px-4 py-1 text-white`}>Completed</button>
            <button onClick={handleIncompletedTasksFilter} className={`border ${taskType==='Incomplete'?"bg-[#54AC34]":"bg-[#ABABAB]"} px-4 py-1 text-white`}>Incomplete</button>
        </div>

    </div>



  )
}

export default Header