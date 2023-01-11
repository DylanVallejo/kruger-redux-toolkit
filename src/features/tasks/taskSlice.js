import { createSlice } from "@reduxjs/toolkit";

//creando un  objt inicial 
const initialState = [
    {
        id:'1',
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id:'2',
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    }
]

//taskSlice es un objeto creado a partir de createSlice
export const taskSlice = createSlice({
        
    //creando la variable de estado
    name: 'tasks',
    initialState,
    // initialState: { 
    //     value: initialState
    // },
    //creando los reducers manejan el estado
    reducers: {
        
        addTask: ( state, action ) => {
            state.push(action.payload)
            // [...state, action.payload]
        },
        deleteTask:( state, action ) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload 
            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
            
        },

    }
})
export const { addTask,deleteTask ,editTask} = taskSlice.actions

//debo exportar el reducer de taskSlice
export default taskSlice.reducer

//53:31