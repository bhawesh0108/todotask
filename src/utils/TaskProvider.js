import React,{useState,createContext,useEffect} from 'react'
import { TaskContext } from './TaskContext';


const TaskProvider = ({children}) => {

    const [tasks,setTasks] = useState([]);

    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if(storedTasks){
            setTasks(storedTasks);
        }
     },[])
    

    const [taskType,setTaskType] = useState("All");



  return (
    <TaskContext.Provider value={{tasks,setTasks,taskType,setTaskType}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider