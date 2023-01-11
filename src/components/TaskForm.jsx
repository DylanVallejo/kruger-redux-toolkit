import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { addTask,editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate,useParams } from 'react-router-dom'


function TaskForm() {
    
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const params = useParams();
    const tasks = useSelector(state => state.tasks);
    
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (params.id) {
            dispatch(
                editTask(task)
            )
        } else {
            dispatch(
                addTask({
                    ...task,
                    id: uuid(),
                })
            )
        }
        navigate('/');  
    }
    
    useEffect(() => {
        if (params.id) {
            setTask(tasks.find((task)=> task.id === params.id))
        }
    }, [params.id, tasks])
    
    // const stateTask = useSelector(state => state.tasks)
    return (
        <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
            <label htmlFor='title' className='block text-sm font-bold mb-2'>Task: </label>
            <input className='w-full p-2 rounded-md bg-zinc-600 mb-2' value={task.title} name='title' type="text" placeholder="Title" onChange={handleChange}/>
            <label htmlFor='description' className='block text-sm font-bold mb-2'>Description: </label>
            <textarea className='w-full p-2 rounded-md bg-zinc-600 mb-2' value={task.description} name='description' placeholder="Description" onChange={handleChange}></textarea>
            <button className='bg-indigo-600 px-2 py-1'>Save</button>
        </form>
    )
}

export default TaskForm