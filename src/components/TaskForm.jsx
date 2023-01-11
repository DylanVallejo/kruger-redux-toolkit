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
            
        console.log(params)
    }, [])
    
    // const stateTask = useSelector(state => state.tasks)
    return (
        <form onSubmit={handleSubmit}>
            <input value={task.title} name='title' type="text" placeholder="Title" onChange={handleChange}/>
            <textarea value={task.description} name='description' placeholder="Description" cols={30} rows={10} onChange={handleChange}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm