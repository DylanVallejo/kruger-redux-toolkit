import { configureStore } from '@reduxjs/toolkit'; 
import taskReducer from '../features/tasks/taskSlice';
const store = configureStore({
    reducer: {
        
        //importando el reducer (taskReducer )
        //nos permite acceder a los valores
        tasks: taskReducer
    }
})

export default store;