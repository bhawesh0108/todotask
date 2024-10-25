import React,{useContext,useState} from 'react'
import { TaskContext } from '../utils/TaskContext';

const Form = () => {
  
  const {tasks,setTasks} = useContext(TaskContext);
  const [val,setVal] = useState("");

  const handleInputChange = (e)=>{
    setVal(e.target.value)
  }

  const handleSubmit = (e)=>{
    if(val!=="")
    {
        let newTask = {
            id: Date.now(),
            name: val,
            completed: false
         }
        localStorage.setItem("tasks",JSON.stringify([...tasks,newTask]));
        setTasks([...tasks,newTask]);    
        setVal("");

    }


  }

  return (
    <div className='p-2 flex flex-col gap-2 w-[100%] sm:px-12 sm:py-2'>
        <input value={val} onChange={handleInputChange} className='border border-slate-200 py-3 px-4 rounded-lg' type = "text" placeholder='Type Something' />
        <button onClick={handleSubmit} className='bg-black text-white py-3 text-center rounded-lg font-bold'>Add Task</button>
    </div>
  )
}

export default Form